import { format } from 'date-fns'

export default function ArticleDate({ date }: { date: Date }) {
  return (
    <time dateTime={date.toISOString()}>{format(date, 'LLLL d, yyyy')}</time>
  )
}
