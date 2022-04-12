import BlogpostPreview from '../components/blog/preview/blogpost-preview'

export default function Home() {
  return (
    <>
      <p>
        On my blog I share my thoughts on various topics like technology,
        science and society.
      </p>

      <br />

      <BlogpostPreview
        id={'0'}
        title="Lorem ipsum dolor sit amet, consetetur sadipscing"
        summary="Lorem ipsum dolor sit amet, consetetur sadipscing elit, dolor sit amet."
        createDate={new Date().toISOString()}
        readingDurationMinutes={2}
        displaySize={'Small'}
      ></BlogpostPreview>
    </>
  )
}
