type CardProps = {
  title: string
  content: string[]
}

export default function Card(props: CardProps) {
  return (
    <div className="mb-7 w-full rounded-xl border p-3 text-center shadow delay-75 duration-100 hover:-translate-y-1 hover:shadow-xl lg:w-1/2 lg:p-5">
      <h2 className="mb-4 text-2xl">{props.title}</h2>
      <div className="flex flex-col space-y-2">
        {props.content.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}
