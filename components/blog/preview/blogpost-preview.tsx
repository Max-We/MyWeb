import Image from 'next/image'
import Link from 'next/link'
import ArticleDate from '../article/article-date'
import { BlogpostPreviewProps } from './blogpost-preview.model'

export default function BlogpostPreview(props: BlogpostPreviewProps) {
  switch (props.displaySize) {
    case 'Small':
      return (
        <Link href={`/blog/${props.slug.current}`}>
          <a>
            <div className="mb-7 flex h-44 w-full justify-between rounded-xl border shadow ">
              <div className="flex w-5/6 flex-col lg:p-5">
                <h2 className="text-xl font-bold">{props.title}</h2>
                <div className="font-l mt-1 mb-2 text-neutral-500">
                  {props.summary}
                </div>
                <div className="mt-auto flex flex-row justify-start font-light text-neutral-500">
                  <ArticleDate date={props.publishedAt} />
                  <span className="mx-2"> · </span>
                  <span>{`${props.readingDurationMinutes} min read`}</span>
                </div>
              </div>
              <Image
                src={props.imageUrl}
                width={500}
                height={500}
                layout="intrinsic"
                objectFit="cover"
                className="rounded-r-xl"
              />
            </div>
          </a>
        </Link>
      )
    case 'Medium':
      return <></>
    case 'Large':
      return <></>
  }
}
