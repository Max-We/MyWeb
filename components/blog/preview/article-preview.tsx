import Image from 'next/image'
import Link from 'next/link'
import ArticleDate from '../article/article-date'
import {
  ArticlePreviewProps,
  largeArticlePreviewImage,
} from './article-preview.model'

export default function ArticlePreview(props: ArticlePreviewProps) {
  var content

  switch (props.displaySize) {
    case 'small':
      content = <></>
      break
    case 'medium':
      content = (
        <div className="flex h-32 w-full justify-between rounded-xl border shadow dark:border-gray-700 dark:bg-gray-800 lg:h-44">
          <div className="flex w-5/6 flex-col p-5">
            <h2 className="text-sm font-bold line-clamp-3 lg:text-xl lg:line-clamp-2">
              {props.title}
            </h2>
            <div className="invisible my-1 h-0 text-neutral-500 dark:text-gray-400 lg:visible lg:h-fit">
              {props.summary}
            </div>
            <div className="mt-auto flex flex-row justify-start text-xs font-light text-neutral-500 dark:text-gray-400 lg:text-base">
              <ArticleDate date={props.publishedAt} />
              <span className="mx-2"> · </span>
              <span className="whitespace-nowrap">{`${props.readingDurationMinutes} min read`}</span>
            </div>
          </div>
          <Image
            src={props.imageUrl}
            width={175}
            height={175}
            layout="intrinsic"
            objectFit="cover"
            className="rounded-r-xl"
            draggable="false"
          />
        </div>
      )
      break
    case 'large':
      content = (
        <div className="h-content flex w-full flex-col justify-between rounded-xl border shadow dark:border-gray-700 dark:bg-gray-800">
          <Image
            src={props.imageUrl}
            width={largeArticlePreviewImage.width}
            height={largeArticlePreviewImage.height}
            layout="responsive"
            objectFit="cover"
            className="rounded-t-xl"
            draggable="false"
          />
          <div className="flex flex-col p-5">
            <h2 className="text-sm font-bold line-clamp-3 lg:text-xl lg:line-clamp-2">
              {props.title}
            </h2>
            <div className="invisible my-1 h-0 text-neutral-500 dark:text-gray-400 lg:visible lg:h-fit">
              {props.summary}
            </div>
            <div className="mt-auto flex flex-row justify-between text-xs font-light text-neutral-500 dark:text-gray-400 lg:text-base">
              <ArticleDate date={props.publishedAt} />
              <span className="whitespace-nowrap">{`${props.readingDurationMinutes} min read`}</span>
            </div>
          </div>
        </div>
      )
      break
  }

  return (
    <Link href={`/blog/${props.slug.current}`}>
      <a>{content}</a>
    </Link>
  )
}
