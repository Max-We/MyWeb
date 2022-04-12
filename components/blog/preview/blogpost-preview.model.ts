export type BlogpostPreviewSize = 'Small' | 'Medium' | 'Large'

export type BlogpostPreviewProps = {
  id: string
  title: string
  summary: string
  createDate: string
  readingDurationMinutes: number
  displaySize: BlogpostPreviewSize
}
