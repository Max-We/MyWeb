import { useRouter } from 'next/router'
import React from 'react'
import NavbarButton from './navbar-button'
import { NavbarIcon, navbarIcons, navbarIconsSolid } from './navbar.model'

export default function Navbar() {
  const router = useRouter()

  return (
    <div
      className="fixed bottom-0 z-50 flex w-screen justify-around border-t
      bg-white dark:border-gray-800 dark:bg-gray-900 xl:grid xl:h-screen xl:w-72 xl:content-start xl:justify-start xl:gap-2 xl:border-r xl:border-t-0 xl:bg-none xl:p-5 xl:text-lg"
    >
      {/* <h2 className="invisible w-0 xl:visible xl:w-auto xl:p-4 xl:text-3xl">
        MyWeb
      </h2> */}

      <NavbarButton
        label="Blog"
        href="/"
        icon={NavbarIcon.Blog}
        isActive={router.pathname == '/' || router.pathname.includes('/blog/')}
      />
      <NavbarButton
        label="Activities"
        href="/activities"
        icon={NavbarIcon.Activities}
        isActive={router.pathname.includes('activities')}
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
        label="Support"
        href="https://www.buymeacoffee.com/mw00"
        icon={NavbarIcon.Support}
        isActive={router.pathname.includes('support')}
        newTab={true}
      />
    </div>
  )
}
