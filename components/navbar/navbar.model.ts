import {
  CodeIcon,
  HeartIcon,
  HomeIcon,
  LightningBoltIcon,
  UserCircleIcon,
} from '@heroicons/react/outline'

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
