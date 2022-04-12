import { format } from 'date-fns'

export default function ArticleDate({ date }: { date: string }) {
  const dateObject = new Date(date)

  return (
    <time dateTime={dateObject.toISOString()}>
      {format(dateObject, 'LLLL d, yyyy')}
    </time>
  )
}
