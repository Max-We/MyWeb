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

export type ImageDimensions = {
  width: number
  height: number
}

export const mediumArticlePreviewImage: ImageDimensions = {
  width: 500,
  height: 500,
}

export const largeArticlePreviewImage: ImageDimensions = {
  width: 1500,
  height: 700,
}
