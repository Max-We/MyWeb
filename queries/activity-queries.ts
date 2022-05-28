import { getClient } from '@lib/sanity'
import { getTwitterClient, twitterUserId } from '@lib/twitter'
import {
  BlogActivity,
  blogActivityTexts,
  TweetActivity,
  tweetActivityTexts,
} from 'components/activities/activity.model'
import { TwitterUser } from 'components/social/twitter/tweet/tweet.model'
import { format } from 'date-fns'
import imageUrlBuilder from '@sanity/image-url'

import { Article } from 'schema'
import { getAllPreviewsQuery } from './article-queries'
import {
  ImageDimensions,
  largeArticlePreviewImage,
  mediumArticlePreviewImage,
} from 'components/blog/preview/article-preview.model'

export async function getTwitterActivities() {
  const twitterUser: TwitterUser = await getTwitterUser()

  const twitterTimeline = await getTwitterClient().v2.userTimeline(
    twitterUserId,
    {
      'tweet.fields': ['created_at'],
    }
  )

  const twitterActivities: TweetActivity[] = twitterTimeline.data.data?.map(
    (tweetData) => {
      return {
        createDate: tweetData.created_at!,
        description: formatActivityDescription(
          new Date(tweetData.created_at!),
          tweetActivityTexts
        ),
        tweet: {
          content: tweetData.text,
          id: tweetData.id,
          user: twitterUser,
        },
      }
    }
  )

  return twitterActivities

  async function getTwitterUser() {
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
    return twitterUser
  }

  function getFullResolutionProfilePicture(profileImageUrl: string) {
    return profileImageUrl.replace('_normal', '') // https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/user-profile-images-and-banners
  }
}

export async function getBlogActivities() {
  const sanityClient = getClient()
  const previews: Article[] = await sanityClient.fetch(getAllPreviewsQuery)
  const imageBuilder = imageUrlBuilder(sanityClient)

  const blogActivities: BlogActivity[] = previews.map((preview) => {
    var imageUrl = ''
    // Small article-preview has no image
    if (preview.size != 'small') {
      var previewImageSize: ImageDimensions | null
      switch (preview.size) {
        case 'medium':
          previewImageSize = mediumArticlePreviewImage
        case 'large':
          previewImageSize = largeArticlePreviewImage
      }

      imageUrl = imageBuilder
        .image(preview.mainImage)
        .width(previewImageSize.width)
        .height(previewImageSize.height)
        .url()
    }

    return {
      createDate: preview.publishedAt,
      description: formatActivityDescription(
        new Date(preview.publishedAt),
        blogActivityTexts
      ),
      articlePreview: {
        slug: preview.slug,
        title: preview.title,
        summary: preview.summary,
        publishedAt: preview.publishedAt,
        readingDurationMinutes: preview.readingDuration,
        imageUrl: imageUrl,
        displaySize: preview.size,
      },
    }
  })
  return blogActivities
}

function formatActivityDescription(createDate: Date, descriptions: string[]) {
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

  const activityDescription =
    descriptions[Math.floor(Math.random() * descriptions.length)]

  return `${dateDescription}, ${activityDescription}`
}
