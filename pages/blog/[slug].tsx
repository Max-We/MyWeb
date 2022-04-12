import { getClient } from '@lib/sanity'
import ArticleDate from 'components/blog/article/article-date'
import { groq } from 'next-sanity'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { Article } from 'schema'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'

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
      </Head>
      <article>
        <h1 className="mb-2 text-center text-5xl">{postdata.title}</h1>
        <div className="text-center text-neutral-500">
          <ArticleDate date={postdata.publishedAt} />
        </div>
        <div className="my-8">
          <Image src={imageUrl} width={imageWidth} height={imageHeight} />
        </div>
        <div className="prose">
          <ReactMarkdown>{postdata.body}</ReactMarkdown>
        </div>
      </article>
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
