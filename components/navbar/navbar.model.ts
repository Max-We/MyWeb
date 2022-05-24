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
  Activities,
  Projects,
  AboutMe,
  Support,
}

export const navbarIcons = {
  [NavbarIcon.Blog]: BookOpenIcon,
  [NavbarIcon.Activities]: LightningBoltIcon,
  [NavbarIcon.Projects]: CodeIcon,
  [NavbarIcon.AboutMe]: UserCircleIcon,
  [NavbarIcon.Support]: HeartIcon,
}

export const navbarIconsSolid = {
  [NavbarIcon.Blog]: BookOpenIconSolid,
  [NavbarIcon.Activities]: LightningBoltIconSolid,
  [NavbarIcon.Projects]: CodeIconSolid,
  [NavbarIcon.AboutMe]: UserCircleIconSolid,
  [NavbarIcon.Support]: HeartIconSolid,
}
