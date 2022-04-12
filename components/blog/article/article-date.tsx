import { format } from 'date-fns'
import { Article } from 'schema'

export default function ArticleDate({
  date,
}: {
  date: Article['publishedAt']
}) {
  console.log(date)

  const dateObject = new Date(date)
  console.log(dateObject)

  return (
    <time dateTime={date} className="whitespace-nowrap">
      {format(dateObject, 'LLLL d, yyyy')}
    </time>
  )
}
