import { getClient } from '@lib/sanity'
import { BlogpostPreviewProps } from 'components/blog/preview/blogpost-preview.model'
import { groq } from 'next-sanity'
import { Post } from 'schema'
import BlogpostPreview from '../components/blog/preview/blogpost-preview'

// Todo: Add pagination if more than 20 posts
const getAllPreviewsQuery = groq`
      *[_type == "post"] | order(publishedAt desc)[0...20] {
        slug,
        title,
        summary,
        publishedAt,
        readingDuration
      }
  `

export default function Home({
  previewsdata,
}: {
  previewsdata: BlogpostPreviewProps[]
}) {
  return (
    <>
      <p>
        On my blog I share my thoughts on various topics like technology,
        science and society.
      </p>

      <br />

      {previewsdata.map((previewdata) => (
        <BlogpostPreview
          slug={previewdata.slug}
          title={previewdata.title}
          summary={previewdata.summary}
          publishedAt={previewdata.publishedAt}
          readingDurationMinutes={previewdata.readingDurationMinutes}
          displaySize={'Small'}
        />
      ))}
    </>
  )
}

export async function getStaticProps() {
  const previews: [Post] = await getClient().fetch(getAllPreviewsQuery)

  const previewProps: BlogpostPreviewProps[] = previews.map((preview) => {
    const imageUrl = ''

    return {
      slug: preview.slug,
      title: preview.title,
      summary: preview.summary,
      publishedAt: preview.publishedAt,
      readingDurationMinutes: preview.readingDuration,
      imageUrl: imageUrl,
      displaySize: 'Small',
    }
  })

  return {
    props: {
      previewsdata: previewProps,
    },
  }
}
