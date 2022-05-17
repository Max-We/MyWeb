import { TwitterApi } from 'twitter-api-v2'

const twitterClient = new TwitterApi(process.env.TWITTER_API_BEARER as string)
const readOnlyClient = twitterClient.readOnly
const readWriteClient = twitterClient.readWrite

export const getTwitterClient = (withWritePermissions: Boolean = false) =>
  withWritePermissions ? readWriteClient : readOnlyClient

export const twitterUserId = process.env.TWITTER_MY_USER_ID as string
