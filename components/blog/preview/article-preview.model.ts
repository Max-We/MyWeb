import { Article } from 'schema'

export type ArticlePreviewProps = {
  slug: Article['slug']
  title: Article['title']
  summary: Article['summary']
  publishedAt: Article['publishedAt']
  readingDurationMinutes: Article['readingDuration']
  imageUrl: string
  displaySize: Article['size']
}

export type ArticlePreviewImageSize = {
  width: number
  height: number
}

export const mediumArticlePreviewImage: ArticlePreviewImageSize = {
  width: 500,
  height: 500,
}

export const largeArticlePreviewImage: ArticlePreviewImageSize = {
  width: 1500,
  height: 700,
}
