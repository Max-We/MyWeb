import Link from 'next/link'
import Image from 'next/image'
import { TwitterUser } from '../tweet/tweet.model'

export default function TwitterProfileInfo(props: TwitterUser) {
  return (
    <Link href="https://twitter.com/MaxWeichart">
      <a target="_blank">
        <div className="flex gap-3">
          <div className="h-12 w-12">
            <Image
              src={props.profilePictureUrl}
              width={50}
              height={50}
              className="rounded-full border-solid"
              draggable="false"
            />
          </div>
          <div className="flex flex-col justify-start">
            <p className="font-bold">{props.name}</p>
            <p className="text-neutral-500 dark:text-gray-400">
              @{props.username}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}
