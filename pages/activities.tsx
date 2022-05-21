import TweetView from 'components/activities/tweet'
import {
  Activity,
  BlogActivity,
  TweetActivity,
} from 'components/activities/activity.model'
import ArticlePreview from 'components/blog/preview/article-preview'
import {
  getBlogActivities,
  getTwitterActivities,
} from 'queries/activity-queries'

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
            {/* Todo: Extract to component */}
            <p className="my-2">{activity.description}</p>
            <TweetView {...activity.tweet} />
          </>
        )
      } else if ('articlePreview' in activity) {
        return (
          <>
            {/* Todo: Extract to component */}
            <p className="my-2">{activity.description}</p>
            <ArticlePreview {...activity.articlePreview} />
          </>
        )
      }
    }
  )

  // Todo: Implement visual verical line
  return <>{activityViews.map((activity) => activity)}</>
}

// Todo: Extract functions or make more readable
export async function getStaticProps() {
  const twitterActivities: TweetActivity[] = await getTwitterActivities()
  const blogActivities: BlogActivity[] = await getBlogActivities()

  var activities: Activity[] = []
  if (twitterActivities != null) {
    activities = activities.concat(twitterActivities)
  }
  if (blogActivities != null) {
    activities = activities.concat(blogActivities)
  }
  activities = sortActivitiesByDateDesc(activities).slice(0, 50)

  return {
    props: {
      activities: activities,
    },
    revalidate: 21600, // refresh every 6 hours
  }

  function sortActivitiesByDateDesc(activities: Activity[]) {
    return activities.sort(
      (x, y) => +new Date(y.createDate) - +new Date(x.createDate)
    )
  }
}
