import { getClient } from '@lib/sanity'
import {
  ImageDimensions,
  ArticlePreviewProps,
  largeArticlePreviewImage,
  mediumArticlePreviewImage,
} from 'components/blog/preview/article-preview.model'
import { Article } from 'schema'
import ArticlePreview from '../components/blog/preview/article-preview'
import imageUrlBuilder from '@sanity/image-url'
import { getAllPreviewsQuery } from 'queries/article-queries'

// Todo: Add pagination if more than 20 posts
export default function Home({
  previewsdata,
}: {
  previewsdata: ArticlePreviewProps[]
}) {
  return (
    <div className="flex flex-col gap-6">
      {previewsdata.map((previewdata) => (
        <ArticlePreview {...previewdata} />
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const sanityClient = getClient()
  const previews: [Article] = await sanityClient.fetch(getAllPreviewsQuery)

  const previewProps: ArticlePreviewProps[] = previews.map((preview) => {
    const imageBuilder = imageUrlBuilder(sanityClient)

    var imageUrl = ''
    // Small article-preview has no image
    if (preview.size != 'small') {
      var previewImageSize: ImageDimensions | null
      switch (preview.size) {
        case 'medium':
          previewImageSize = mediumArticlePreviewImage
        case 'large':
          previewImageSize = largeArticlePreviewImage
      }

      imageUrl = imageBuilder
        .image(preview.mainImage)
        .width(previewImageSize.width)
        .height(previewImageSize.height)
        .url()
    }

    return {
      slug: preview.slug,
      title: preview.title,
      summary: preview.summary,
      publishedAt: preview.publishedAt,
      readingDurationMinutes: preview.readingDuration,
      imageUrl: imageUrl,
      displaySize: preview.size,
    }
  })

  return {
    props: {
      previewsdata: previewProps,
    },
  }
}
