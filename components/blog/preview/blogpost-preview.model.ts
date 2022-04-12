import { Post } from 'schema'

export type BlogpostPreviewSize = 'Small' | 'Medium' | 'Large'

export type BlogpostPreviewProps = {
  slug: Post['slug']
  title: Post['title']
  summary: Post['summary']
  publishedAt: Post['publishedAt']
  readingDurationMinutes: Post['readingDuration']
  imageUrl: string
  displaySize: BlogpostPreviewSize
}
