import Link from 'next/link'

export default function DmMeButton() {
  return (
    <Link href="https://twitter.com/messages/compose">
      <button className="rounded-full bg-sky-500 py-2 px-4 font-bold text-white hover:bg-sky-600">
        DM me
      </button>
    </Link>
  )
}
