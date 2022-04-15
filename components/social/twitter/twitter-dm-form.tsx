import TwitterProfileInfo from './twitter-profile-info'
import TwitterDmButton from './twitter-dm-button'

export default function TwitterDmForm() {
  return (
    <div>
      <p className="mb-8 text-center">
        Do you have something to say about this topic? To learn new
        perspectives, develop ideas and start interesting discussions, I’m
        always open to chat.
      </p>

      <div className="flex justify-center">
        <TwitterProfileInfo />
        <TwitterDmButton />
      </div>
    </div>
  )
}
