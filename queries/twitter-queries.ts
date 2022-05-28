import { getTwitterClient, twitterUserId } from '@lib/twitter'
import { TwitterUser } from 'components/social/twitter/tweet/tweet.model'

export async function getTwitterUser() {
  const twitterUserResponse = await (
    await getTwitterClient().v2.users(twitterUserId, {
      'user.fields': ['profile_image_url'],
    })
  ).data[0]

  const twitterUser: TwitterUser = {
    name: twitterUserResponse.name,
    username: twitterUserResponse.username,
    profilePictureUrl: getFullResolutionProfilePicture(
      twitterUserResponse.profile_image_url!
    ),
  }
  return twitterUser
}

function getFullResolutionProfilePicture(profileImageUrl: string) {
  return profileImageUrl.replace('_normal', '') // https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/user-profile-images-and-banners
}
