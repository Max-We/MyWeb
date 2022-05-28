import { MoonIcon, SunIcon } from '@heroicons/react/outline'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  console.log('theme new new: ' + theme)

  return (
    <button
      onClick={changeTheme}
      className="invisible fixed bottom-0 right-0 mr-5 mb-5 flex h-14 w-14 items-center justify-center rounded-full border bg-white shadow hover:bg-zinc-200
        dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700
        xl:visible"
    >
      {theme == 'dark' ? (
        <SunIcon className="h-8 w-8 stroke-[1.5px]" />
      ) : (
        <MoonIcon className="h-8 w-8 stroke-[1.5px]" />
      )}
    </button>
  )

  function changeTheme() {
    if (theme == 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
}
