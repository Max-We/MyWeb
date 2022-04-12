import { Article } from 'schema'

export type ArticlePreviewSize = 'Small' | 'Medium' | 'Large'

export type ArticlePreviewProps = {
  slug: Article['slug']
  title: Article['title']
  summary: Article['summary']
  publishedAt: Article['publishedAt']
  readingDurationMinutes: Article['readingDuration']
  imageUrl: string
  displaySize: ArticlePreviewSize
}
