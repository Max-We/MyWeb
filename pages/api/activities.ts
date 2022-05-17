import { getTwitterClient, twitterUserId } from '@lib/twitter'
import { IncomingMessage, ServerResponse } from 'http'

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {
  if (req.method == 'GET') {
    try {
      const timeline = await getTwitterClient().v2.userTimeline(twitterUserId)
      for (const tweet of timeline.data.data) {
        console.log(tweet.text)
        console.log('==================')
      }
    } catch (err) {
      console.log(err)
    }
  }
}
