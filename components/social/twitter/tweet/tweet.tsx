import Link from 'next/link'
import { Tweet } from './tweet.model'
import Image from 'next/image'

export default function TweetView(props: Tweet) {
  // Todo: Highlight @mentions and urls
  return (
    <Link href={`https://twitter.com/twitter/status/${props.id}`}>
      <a>
        <div className="h-content flex w-full justify-between rounded-xl border p-5 shadow dark:border-gray-700 dark:bg-gray-800">
          <span className="flex">
            <span>
              <Image
                src={props.user.profilePictureUrl}
                width={50}
                height={50}
                layout="intrinsic"
                objectFit="cover"
                className="rounded-full"
                draggable="false"
              />
            </span>

            <span className="ml-3 flex w-fit flex-col">
              <span className="flex">
                <p className="mr-1 font-bold">{props.user.name}</p>
                <p className="font-light text-gray-500 dark:text-gray-400">
                  @{props.user.username}
                </p>
              </span>
              <p>{props.content}</p>
            </span>
          </span>
        </div>
      </a>
    </Link>
  )
}
