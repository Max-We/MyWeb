import { getClient } from '@lib/sanity'
import { getTwitterClient, twitterUserId } from '@lib/twitter'
import { getAllPreviewsQuery } from 'queries/article-queries'
import { Article } from 'schema'
import imageUrlBuilder from '@sanity/image-url'
import { TwitterUser } from 'components/activities/tweet.model'
import TweetView from 'components/activities/tweet'
import {
  ActivityElement,
  BlogActivity,
  blogActivityTexts,
  TweetActivity,
  tweetActivityTexts,
} from 'components/activities/activity.model'
import ArticlePreview from 'components/blog/preview/article-preview'
import { format } from 'date-fns'

export default function Activities({
  activities,
}: {
  activities: (TweetActivity | BlogActivity)[]
}) {
  const activityViews = activities.map(
    (activity: TweetActivity | BlogActivity) => {
      if ('tweet' in activity) {
        return (
          <>
            <p className="my-2">{activity.description}</p>
            <TweetView {...activity.tweet} />
          </>
        )
      } else if ('articlePreview' in activity) {
        return (
          <>
            <p className="my-2">{activity.description}</p>
            <ArticlePreview {...activity.articlePreview} />
          </>
        )
      }
    }
  )

  return <>{activityViews.map((activity) => activity)}</>
}

export async function getStaticProps() {
  const twitterActivities: TweetActivity[] = await getTwitterActivities()
  const blogActivities: BlogActivity[] = await getBlogActivities()

  var activities: ActivityElement[]
  if (twitterActivities != null) {
    activities = [...twitterActivities, ...blogActivities]
  } else {
    activities = [...blogActivities]
  }
  activities = sortActivitiesByDateDesc(activities)

  return {
    props: {
      activities: activities,
    },
    revalidate: 21600, // 6 hours
  }

  async function getTwitterActivities() {
    const twitterUserResponse = await (
      await getTwitterClient().v2.users(twitterUserId, {
        'user.fields': ['profile_image_url'],
      })
    ).data[0]

    const twitterUser: TwitterUser = {
      name: twitterUserResponse.name,
      username: twitterUserResponse.username,
      profilePictureUrl: getFullResolutionProfilePicture(
        twitterUserResponse.profile_image_url!
      ),
    }

    const twitterTimelineResponse = await getTwitterClient().v2.userTimeline(
      twitterUserId,
      {
        'tweet.fields': ['created_at'],
      }
    )

    const twitterActivities: TweetActivity[] =
      twitterTimelineResponse.data.data?.map((tweetData) => {
        return {
          createDate: tweetData.created_at!,
          description: getFullActivityDescription(
            new Date(tweetData.created_at!),
            getRandomTweetActivityDescription()
          ),
          tweet: {
            content: tweetData.text,
            id: tweetData.id,
            user: twitterUser,
          },
        }
      })

    return twitterActivities

    function getFullResolutionProfilePicture(profileImageUrl: string) {
      return profileImageUrl.replace('_normal', '')
    }
  }

  async function getBlogActivities() {
    const sanityClient = getClient()
    const previews: Article[] = await sanityClient.fetch(getAllPreviewsQuery)

    const blogActivities: BlogActivity[] = previews.map((preview) => {
      const imageBuilder = imageUrlBuilder(sanityClient)

      return {
        createDate: preview.publishedAt,
        description: getFullActivityDescription(
          new Date(preview.publishedAt),
          getRandomBlogActivityDescription()
        ),
        articlePreview: {
          slug: preview.slug,
          title: preview.title,
          summary: preview.summary,
          publishedAt: preview.publishedAt,
          readingDurationMinutes: preview.readingDuration,
          imageUrl: imageBuilder
            .image(preview.mainImage)
            .width(500)
            .height(500)
            .url(),
          displaySize: 'Small',
        },
      }
    })
    return blogActivities
  }

  function sortActivitiesByDateDesc(activities: ActivityElement[]) {
    return activities.sort(
      (x, y) => +new Date(y.createDate) - +new Date(x.createDate)
    )
  }

  function getFullActivityDescription(
    createDate: Date,
    activityDescription: string
  ) {
    const tweetAgeHours =
      ((Date.now() - new Date(createDate).getTime()) * 1000) / 60 / 60

    var dateDescription: string
    if (tweetAgeHours < 24) {
      dateDescription = 'Today'
    } else if (tweetAgeHours < 48) {
      dateDescription = 'Yesterday'
    } else if (tweetAgeHours < 72) {
      dateDescription = 'Three days ago'
    } else {
      dateDescription = `On ${format(new Date(createDate), 'LLLL d')}`
    }

    return `${dateDescription}, ${activityDescription}`
  }

  function getRandomTweetActivityDescription() {
    return tweetActivityTexts[
      Math.floor(Math.random() * tweetActivityTexts.length)
    ]
  }

  function getRandomBlogActivityDescription() {
    return blogActivityTexts[
      Math.floor(Math.random() * blogActivityTexts.length)
    ]
  }
}
