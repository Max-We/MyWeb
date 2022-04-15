import { getClient } from '@lib/sanity'
import ArticleDate from 'components/blog/article/article-date'
import { groq } from 'next-sanity'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { Article } from 'schema'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import TwitterContactForm from 'components/social/twitter/twitter-contact-form'
import { useRouter } from 'next/router'

const getAllSlugsQuery = groq`
      *[_type == "article"] { slug }
  `

const getPostQuery = groq`
      *[_type == "article" && slug.current == $slug][0]
  `

const imageWidth = 1600
const imageHeight = 900

export default function ArticlePage({
  postdata,
  imageUrl,
}: {
  postdata: Article
  imageUrl: string
}) {
  return (
    <>
      <Head>
        <title>{postdata.title}</title>
        <meta property="og:title" content={postdata.title} key="og:title" />
        <meta
          property="og:description"
          content={postdata.summary}
          key="og:description"
        />
        <meta name="description" content={postdata.summary} key="description" />
        <meta property="og:image" content={imageUrl} key="og:image" />
        <meta
          property="og:site_name"
          content="MyBlog by Maximilian Weichart"
          key="og:sitename"
        />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:locale" content="en_US" key="og:locale" />
      </Head>

      <div className="flex justify-center text-justify">
        <div className="max-w-prose">
          <article className="mb-12">
            <h1 className="mb-2 text-center text-5xl">{postdata.title}</h1>
            <div className="text-center text-neutral-500">
              <ArticleDate date={postdata.publishedAt} />
            </div>
            <div className="my-8 block">
              <Image
                src={imageUrl}
                width={imageWidth}
                height={imageHeight}
                layout="intrinsic"
                draggable="false"
              />
            </div>
            <div className="flex justify-center">
              <div className="prose">
                <ReactMarkdown>{postdata.body}</ReactMarkdown>
              </div>
            </div>
          </article>

          <TwitterContactForm />
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const posts: [{ slug: Article['slug'] }] = await getClient().fetch(
    getAllSlugsQuery
  )

  const slugs = posts.map((post) => {
    return {
      params: {
        slug: post.slug.current,
      },
    }
  })

  return {
    paths: slugs,
    fallback: false,
  }
}

export async function getStaticProps({
  params,
}: {
  params: { slug: Article['slug'] }
}) {
  const client = getClient()
  const post: Article = await client.fetch(getPostQuery, {
    slug: params.slug,
  })
  const imageBuilder = imageUrlBuilder(client)

  const imageUrl = imageBuilder
    .image(post.mainImage)
    .width(imageWidth)
    .height(imageHeight)
    .url()

  return {
    props: {
      postdata: post,
      imageUrl: imageUrl,
    },
  }
}
