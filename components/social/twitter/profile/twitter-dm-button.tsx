import { ChatIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export default function TwitterDmButton({ name: username }: { name: string }) {
  return (
    <Link href={`https://twitter.com/${username}`}>
      <a target="_blank">
        <button
          className="flex items-center justify-center rounded-full bg-sky-500 p-3 font-bold
        text-white hover:bg-sky-600 dark:bg-sky-500 dark:hover:bg-sky-600 sm:px-10"
        >
          <ChatIcon className="h-8 w-8 stroke-[1.5px] sm:mr-2" />
          <span className="invisible h-0 w-0 sm:visible sm:h-fit sm:w-fit">
            DM me
          </span>
        </button>
      </a>
    </Link>
  )
}
