import ArticlePreview from 'components/blog/preview/article-preview'
import ActivityTimelineLine from './activity-timeline-line'
import { BlogActivity, TweetActivity } from './activity.model'
import TweetView from './tweet'

export default function ActivityTimelineElement({
  activity,
  isStart,
}: {
  activity: TweetActivity | BlogActivity
  isStart: boolean
}) {
  var activityView

  // Content can be a Tweet or Blog Article
  if ('tweet' in activity) {
    activityView = <TweetView {...activity.tweet} />
  } else if ('articlePreview' in activity) {
    activityView = <ArticlePreview {...activity.articlePreview} />
  }

  return (
    <>
      <div className="my-2 ml-5 flex items-center">
        <ActivityTimelineLine isStart={isStart} />
        <p>{activity.description}</p>
      </div>
      {activityView}
    </>
  )
}
