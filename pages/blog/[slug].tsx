import { getClient } from '@lib/sanity'
import ArticleDate from 'components/blog/article/article-date'
import { groq } from 'next-sanity'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { Post } from 'schema'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'

const getAllSlugsQuery = groq`
      *[_type == "post"] { slug }
  `

const getPostQuery = groq`
      *[_type == "post" && slug.current == $slug][0]
  `

const imageWidth = 1600
const imageHeight = 900

export default function Article({
  postdata,
  imageUrl,
}: {
  postdata: Post
  imageUrl: string
}) {
  return (
    <>
      <Head>
        <title>{postdata.title}</title>
      </Head>
      <article>
        <h1 className="mb-6 text-5xl">{postdata.title}</h1>
        <div className="mb-2 text-neutral-500">
          <ArticleDate date={postdata.publishedAt} />
        </div>
        <Image src={imageUrl} width={imageWidth} height={imageHeight} />
        <div className="prose">
          <ReactMarkdown>{postdata.body}</ReactMarkdown>
        </div>
      </article>
    </>
  )
}

export async function getStaticPaths() {
  const posts: [{ slug: Post['slug'] }] = await getClient().fetch(
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
  params: { slug: Post['slug'] }
}) {
  const client = getClient()
  const post: Post = await client.fetch(getPostQuery, {
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
