import {
  CodeIcon,
  HeartIcon,
  HomeIcon,
  LightningBoltIcon,
  UserCircleIcon,
} from '@heroicons/react/outline'

import {
  CodeIcon as CodeIconSolid,
  HeartIcon as HeartIconSolid,
  HomeIcon as HomeIconSolid,
  LightningBoltIcon as LightningBoltIconSolid,
  UserCircleIcon as UserCircleIconSolid,
} from '@heroicons/react/solid'

export enum NavbarIcon {
  Home,
  Activity,
  Projects,
  AboutMe,
  Support,
}

export const navbarIcons = {
  [NavbarIcon.Home]: HomeIcon,
  [NavbarIcon.Activity]: LightningBoltIcon,
  [NavbarIcon.Projects]: CodeIcon,
  [NavbarIcon.AboutMe]: UserCircleIcon,
  [NavbarIcon.Support]: HeartIcon,
}

export const navbarIconsSolid = {
  [NavbarIcon.Home]: HomeIconSolid,
  [NavbarIcon.Activity]: LightningBoltIconSolid,
  [NavbarIcon.Projects]: CodeIconSolid,
  [NavbarIcon.AboutMe]: UserCircleIconSolid,
  [NavbarIcon.Support]: HeartIconSolid,
}
