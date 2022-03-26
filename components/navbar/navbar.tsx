import Link from 'next/link'
import React from 'react'
import { NavbarIcon, navbarIcons } from './navbar.model'

export default function Navbar() {
  return (
    <div className="fixed grid h-screen w-72 content-start gap-2 border-r p-5 text-lg">
      <NavbarButton label="Home" href="/home" icon={NavbarIcon.Home} />
      <NavbarButton
        label="Activity"
        href="/activity"
        icon={NavbarIcon.Activity}
      />
      <NavbarButton
        label="Projects"
        href="/projects"
        icon={NavbarIcon.Projects}
      />
      <NavbarButton
        label="About Me"
        href="/about-me"
        icon={NavbarIcon.AboutMe}
      />
      <NavbarButton
        label="Buy Me A Coffee"
        href="/support"
        icon={NavbarIcon.Support}
      />
    </div>
  )
}

export function NavbarButton({
  label,
  href,
  icon,
}: {
  label: string
  href: string
  icon: NavbarIcon
}) {
  const HeroIcon = navbarIcons[icon]

  return (
    <Link href={href}>
      <button className="flex h-14 items-center justify-start rounded-full p-2 text-left align-middle hover:bg-zinc-200">
        <HeroIcon className="mr-2 h-8 w-8" />
        <span>{label}</span>
      </button>
    </Link>
  )
}
