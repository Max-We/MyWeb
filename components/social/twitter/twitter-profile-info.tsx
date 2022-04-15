import Link from 'next/link'
import Image from 'next/image'

export default function TwitterProfileInfo() {
  return (
    <Link href="https://twitter.com/MaxWeichart">
      <a target="_blank">
        <div className="flex gap-3">
          <div className="h-12 w-12">
            <Image
              src="/profile-picture-memoji.jpg"
              width={50}
              height={50}
              className="rounded-full border-solid"
              draggable="false"
            />
          </div>
          <div className="flex flex-col justify-start">
            <p className="font-bold">Max Weichart</p>
            <p className="text-neutral-500">@MaxWeichart</p>
          </div>
        </div>
      </a>
    </Link>
  )
}
