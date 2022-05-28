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

export const getAllSlugsQuery = groq`
      *[_type == "article"] { slug }
  `

export const getPostQuery = groq`
      *[_type == "article" && slug.current == $slug][0]
  `
