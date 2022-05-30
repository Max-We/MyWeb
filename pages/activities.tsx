import {
  Activity,
  BlogActivity,
  TweetActivity,
} from 'components/activities/activity.model'
import {
  getBlogActivities,
  getTwitterActivities,
} from 'queries/activity-queries'
import ActivityTimelineSegment from 'components/activities/activity-timeline-segment'

export default function Activities({
  activities,
}: {
  activities: (TweetActivity | BlogActivity)[]
}) {
  return (
    <>
      {activities.map((activity: TweetActivity | BlogActivity, index) => {
        return (
          <ActivityTimelineSegment activity={activity} isStart={index == 0} />
        )
      })}
    </>
  )
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
    revalidate: 300, // refresh every 5 Minutes
  }

  function sortActivitiesByDateDesc(activities: Activity[]) {
    return activities.sort(
      (x, y) => +new Date(y.createDate) - +new Date(x.createDate)
    )
  }
}
