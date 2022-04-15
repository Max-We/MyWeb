import { ChatIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export default function TwitterDmButton() {
  return (
    <Link href="https://twitter.com/MaxWeichart">
      <button className="flex items-center justify-center rounded-full bg-sky-500 py-2 px-10 font-bold text-white hover:bg-sky-600">
        <ChatIcon className="mr-2 h-8 w-8" />
        <span>DM me</span>
      </button>
    </Link>
  )
}
