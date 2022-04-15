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
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={postdata.title} />
      <meta name="twitter:description" content={postdata.summary} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:creator" content={creator} />
      <meta name="twitter:site" content={siteName} />
    </Head>
  )
}
