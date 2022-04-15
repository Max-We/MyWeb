import { useRouter } from 'next/router'
import React from 'react'
import NavbarButton from './navbar-button'
import { NavbarIcon, navbarIcons, navbarIconsSolid } from './navbar.model'

export default function Navbar() {
  const router = useRouter()
  console.log(router.pathname)

  return (
    // Todo: z-index above card hover
    <div
      className="fixed bottom-0 z-50 flex w-screen justify-around border-t bg-white
      xl:grid xl:h-screen xl:w-72 xl:content-start xl:justify-start xl:gap-2 xl:border-r xl:border-t-0 xl:bg-none xl:p-5 xl:text-lg"
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
