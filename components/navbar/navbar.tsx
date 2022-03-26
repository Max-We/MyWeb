import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { NavbarIcon, navbarIcons, navbarIconsSolid } from './navbar.model'

export default function Navbar() {
  const router = useRouter()

  return (
    <div className="fixed grid h-screen w-72 content-start gap-2 border-r p-5 text-lg">
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
      <button className="flex h-14 items-center justify-start rounded-full p-2 text-left align-middle hover:bg-zinc-200">
        <HeroIcon className="mr-2 h-8 w-8" />
        <span className={`${isActive && 'font-bold'}`}>{label}</span>
      </button>
    </Link>
  )
}
