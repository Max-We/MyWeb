import React from 'react'
import { NavbarIcon, navbarIcons } from './navbar.model'

export default function Navbar() {
  return (
    <div className="fixed grid h-screen w-72 content-start gap-2 border-r p-5 text-lg">
      <NavbarButton label="Home" icon={NavbarIcon.Home} />
      <NavbarButton label="Activity" icon={NavbarIcon.Activity} />
      <NavbarButton label="Projects" icon={NavbarIcon.Projects} />
      <NavbarButton label="About Me" icon={NavbarIcon.AboutMe} />
      <NavbarButton label="Buy Me A Coffee" icon={NavbarIcon.Support} />
    </div>
  )
}

export function NavbarButton({
  label,
  icon,
}: {
  label: string
  icon: NavbarIcon
}) {
  const HeroIcon = navbarIcons[icon]

  return (
    <button className="flex h-14 items-center justify-start rounded-full p-2 text-left align-middle hover:bg-zinc-200">
      <HeroIcon className="mr-2 h-8 w-8" />
      <span>{label}</span>
    </button>
  )
}
