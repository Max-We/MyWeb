import { groq } from 'next-sanity'

export const getAllPreviewsQuery = groq`
      *[_type == "article"] | order(publishedAt desc)[0...20] {
        slug,
        title,
        summary,
        publishedAt,
        mainImage,
        readingDuration,
        size
      }
  `
