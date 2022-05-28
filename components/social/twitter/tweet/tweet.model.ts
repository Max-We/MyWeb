export type Tweet = {
  user: TwitterUser
  content: string
  id: string
}

export type TwitterUser = {
  name: string
  username: string
  profilePictureUrl: string
}
