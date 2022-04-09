export type BlogpostPreviewSize = 'Small' | 'Medium' | 'Large'

export type BlogpostPreviewProps = {
  title: string
  summary: string
  createDate: Date
  readingDurationMinutes: number
  displaySize: BlogpostPreviewSize
}
