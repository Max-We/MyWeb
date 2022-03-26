import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { NavbarIcon, navbarIcons, navbarIconsSolid } from './navbar.model'

export default function Navbar() {
  const router = useRouter()

  return (
    // Todo: z-index above card hover
    <div
      className="fixed bottom-0 flex w-screen justify-around border-t
        bg-white xl:grid xl:h-screen xl:w-72 xl:content-start xl:justify-start xl:gap-2 xl:border-r xl:border-t-0 xl:bg-none xl:p-5 xl:text-lg"
    >
      {/* <h2 className="invisible w-0 xl:visible xl:w-auto xl:p-4 xl:text-3xl">
        MyWeb
      </h2> */}

      <NavbarButton
        label="Home"
        href="/home"
        icon={NavbarIcon.Home}
        isActive={router.pathname.includes('home')}
      />
      <NavbarButton
        label="Activity"
        href="/activity"
        icon={NavbarIcon.Activity}
        isActive={router.pathname.includes('activity')}
      />
      <NavbarButton
        label="Projects"
        href="/projects"
        icon={NavbarIcon.Projects}
        isActive={router.pathname.includes('projects')}
      />
      <NavbarButton
        label="About Me"
        href="/about-me"
        icon={NavbarIcon.AboutMe}
        isActive={router.pathname.includes('about-me')}
      />
      <NavbarButton
        label="Buy Me A Coffee"
        href="/support"
        icon={NavbarIcon.Support}
        isActive={router.pathname.includes('support')}
      />
    </div>
  )
}

export function NavbarButton({
  label,
  href,
  icon,
  isActive,
}: {
  label: string
  href: string
  icon: NavbarIcon
  isActive: boolean
}) {
  const HeroIcon = isActive ? navbarIconsSolid[icon] : navbarIcons[icon]

  return (
    <Link href={href}>
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
    </Link>
  )
}
