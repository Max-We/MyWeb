import {
  BookOpenIcon,
  CodeIcon,
  HeartIcon,
  LightningBoltIcon,
  UserCircleIcon,
} from '@heroicons/react/outline'

import {
  CodeIcon as CodeIconSolid,
  HeartIcon as HeartIconSolid,
  BookOpenIcon as BookOpenIconSolid,
  LightningBoltIcon as LightningBoltIconSolid,
  UserCircleIcon as UserCircleIconSolid,
} from '@heroicons/react/solid'

export enum NavbarIcon {
  Blog,
  Activity,
  Projects,
  AboutMe,
  Support,
}

export const navbarIcons = {
  [NavbarIcon.Blog]: BookOpenIcon,
  [NavbarIcon.Activity]: LightningBoltIcon,
  [NavbarIcon.Projects]: CodeIcon,
  [NavbarIcon.AboutMe]: UserCircleIcon,
  [NavbarIcon.Support]: HeartIcon,
}

export const navbarIconsSolid = {
  [NavbarIcon.Blog]: BookOpenIconSolid,
  [NavbarIcon.Activity]: LightningBoltIconSolid,
  [NavbarIcon.Projects]: CodeIconSolid,
  [NavbarIcon.AboutMe]: UserCircleIconSolid,
  [NavbarIcon.Support]: HeartIconSolid,
}
