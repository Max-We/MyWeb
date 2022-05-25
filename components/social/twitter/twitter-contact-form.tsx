import TwitterProfileInfo from './twitter-profile-info'
import TwitterDmButton from './twitter-dm-button'

export default function TwitterDmForm() {
  return (
    <div className="rounded-xl border p-5 shadow dark:border-gray-700 dark:bg-gray-800">
      <p className="invisible h-0 w-0 sm:visible sm:mb-8 sm:h-fit sm:w-fit sm:text-center">
        Do you have something to say about this topic? To learn new
        perspectives, develop ideas and start interesting discussions, I’m
        always open for a chat.
      </p>

      <p className="mb-8 text-center sm:invisible sm:mb-0 sm:h-0 sm:w-0">
        Do you have something to say about this topic? I’m always open for a
        chat.
      </p>

      <div className="flex justify-around md:justify-center md:gap-12">
        <TwitterProfileInfo />
        <TwitterDmButton />
      </div>
    </div>
  )
}
