import { AboutMeCardProps } from './about-me-card.model'

export default function AboutMeCard(props: AboutMeCardProps) {
  return (
    <div className="w-full rounded-xl border p-3 text-center shadow delay-75 duration-100 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 lg:p-5">
      <h2 className="mb-4 text-2xl">{props.title}</h2>
      <div className="flex flex-col space-y-2">
        {props.content.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}
