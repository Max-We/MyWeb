import Head from 'next/head'
import { Article } from 'schema'

export default function ArticleMeta({
  postdata,
  imageUrl,
}: {
  postdata: Article
  imageUrl: string
}) {
  const creator = 'Maximilian Weichart'
  const siteName = `MyBlog by ${creator}`
  console.log(imageUrl)

  return (
    <Head>
      {/* General */}
      <title>{postdata.title}</title>
      <meta name="description" content={postdata.summary} key="description" />

      {/* Open Graph */}
      <meta property="og:title" content={postdata.title} key="og:title" />
      <meta
        property="og:description"
        content={postdata.summary}
        key="og:description"
      />
      <meta property="og:image" content={imageUrl} key="og:image" />
      <meta property="og:site_name" content={siteName} key="og:sitename" />
      <meta property="og:type" content="article" key="og:type" />
      <meta property="og:locale" content="en_US" key="og:locale" />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      <meta name="twitter:creator" content={creator} key="twitter:creator" />
      <meta name="twitter:site" content={siteName} key="twitter:site" />
    </Head>
  )
}
