import { getClient } from '@lib/sanity'
import { ArticlePreviewProps } from 'components/blog/preview/article-preview.model'
import { groq } from 'next-sanity'
import { Article } from 'schema'
import ArticlePreview from '../components/blog/preview/article-preview'
import imageUrlBuilder from '@sanity/image-url'

// Todo: Add pagination if more than 20 posts
const getAllPreviewsQuery = groq`
      *[_type == "article"] | order(publishedAt desc)[0...20] {
        slug,
        title,
        summary,
        publishedAt,
        mainImage,
        readingDuration
      }
  `

export default function Home({
  previewsdata,
}: {
  previewsdata: ArticlePreviewProps[]
}) {
  return (
    <>
      {previewsdata.map((previewdata) => (
        <ArticlePreview
          slug={previewdata.slug}
          title={previewdata.title}
          summary={previewdata.summary}
          publishedAt={previewdata.publishedAt}
          readingDurationMinutes={previewdata.readingDurationMinutes}
          imageUrl={previewdata.imageUrl}
          displaySize={'Small'}
          key={previewdata.slug.current}
        />
      ))}
    </>
  )
}

export async function getStaticProps() {
  const sanityClient = getClient()
  const previews: [Article] = await sanityClient.fetch(getAllPreviewsQuery)

  const previewProps: ArticlePreviewProps[] = previews.map((preview) => {
    const imageBuilder = imageUrlBuilder(sanityClient)

    return {
      slug: preview.slug,
      title: preview.title,
      summary: preview.summary,
      publishedAt: preview.publishedAt,
      readingDurationMinutes: preview.readingDuration,
      imageUrl: imageBuilder
        .image(preview.mainImage)
        .width(500)
        .height(500)
        .url(),
      displaySize: 'Small',
    }
  })

  return {
    props: {
      previewsdata: previewProps,
    },
  }
}
