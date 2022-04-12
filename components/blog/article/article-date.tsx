import { format } from 'date-fns'
import { Post } from 'schema'

export default function ArticleDate({ date }: { date: Post['publishedAt'] }) {
  console.log(date)

  const dateObject = new Date(date)
  console.log(dateObject)

  return <time dateTime={date}>{format(dateObject, 'LLLL d, yyyy')}</time>
}
