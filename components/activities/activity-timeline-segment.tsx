import ArticlePreview from 'components/blog/preview/article-preview'
import TweetView from 'components/social/twitter/tweet/tweet'
import ActivityTimelineLine from './activity-timeline-line'
import { BlogActivity, TweetActivity } from './activity.model'

export default function ActivityTimelineSegment({
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
        <p className="text-gray-500 dark:text-gray-400">
          {activity.description}
        </p>
      </div>
      {activityView}
    </>
  )
}
