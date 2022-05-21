import { ArticlePreviewProps } from 'components/blog/preview/article-preview.model'
import { Tweet } from './tweet.model'

export type ActivityElement = {
  createDate: string
  description: string
}

export type TweetActivity = ActivityElement & {
  tweet: Tweet
}

export type BlogActivity = ActivityElement & {
  articlePreview: ArticlePreviewProps
}

// Pattern: DATE, ActivityText
// Example: Yesterday, I tweeted this
export const tweetActivityTexts = [
  'I tweeted this',
  'I tweeted the following',
  'I posted this on Twitter',
  'I wrote this Tweet',
  'I published a Tweet',
]

// Pattern: DATE, ActivityText
// Example: Yesterday, I wrote a new article
export const blogActivityTexts = [
  'I wrote a new article',
  'I published this article',
  'I posted an article',
]
