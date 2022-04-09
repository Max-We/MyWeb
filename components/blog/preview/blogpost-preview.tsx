import Image from 'next/image'
import ArticleDate from '../article/article-date'
import {
  BlogpostPreviewProps,
  BlogpostPreviewSize,
} from './blogpost-preview.model'

export default function BlogpostPreview(props: BlogpostPreviewProps) {
  switch (props.displaySize) {
    case 'Small':
      return (
        <div className="h-42 mb-7 flex w-full justify-between rounded-xl border shadow ">
          <div className="lg:p-5">
            <h2 className="text-xl font-bold">{props.title}</h2>
            <div className="font-l mt-1 mb-2 flex flex-col text-neutral-500">
              {props.summary}
            </div>
            <div className="flex flex-row justify-start font-light text-neutral-500">
              <ArticleDate date={props.createDate} />
              <span className="mx-2"> · </span>
              <span>{`${props.readingDurationMinutes} min read`}</span>
            </div>
          </div>
          <Image
            src="/placeholder.png"
            width={225}
            height={200}
            layout="intrinsic"
            objectFit="cover"
            className="rounded-r-xl"
          />
        </div>
      )
    case 'Medium':
      return <></>
    case 'Large':
      return <></>
  }
}
