import Link from 'next/link'
import { NavbarIcon, navbarIcons, navbarIconsSolid } from './navbar.model'

export default function NavbarButton({
  label,
  href,
  icon,
  isActive,
  newTab = false,
}: {
  label: string
  href: string
  icon: NavbarIcon
  isActive: boolean
  newTab?: boolean
}) {
  const HeroIcon = isActive ? navbarIconsSolid[icon] : navbarIcons[icon]

  return (
    <Link href={href}>
      <a target={newTab ? '_blank' : '_self'}>
        <button
          className="flex h-14 items-center justify-center
        xl:justify-start xl:rounded-full xl:px-4 xl:align-middle xl:hover:bg-zinc-200"
        >
          <HeroIcon className="h-8 w-8 xl:mr-2" />
          <span
            className={`${
              isActive && 'font-bold'
            } invisible w-0 xl:visible xl:w-auto`}
          >
            {label}
          </span>
        </button>
      </a>
    </Link>
  )
}
