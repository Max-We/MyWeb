import { getClient } from '@lib/sanity'
import ArticleDate from 'components/blog/article/article-date'
import { groq } from 'next-sanity'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { Post } from 'schema'
// import utilStyles from '../../styles/utils.module.css'

const getAllSlugsQuery = groq`
      *[_type == "post"] { slug }
  `

const getPostQuery = groq`
      *[_type == "post" && slug.current == $slug][0]
  `

export default function Article({ postdata }: { postdata: Post }) {
  return (
    <>
      <Head>
        <title>{postdata.title}</title>
      </Head>
      <article>
        <h1 className="mb-6 text-5xl">{postdata.title}</h1>
        {/* Todo: Parse date from sanity */}
        <div className="mb-2 text-neutral-500">
          <ArticleDate date={postdata.publishedAt!} />
        </div>
        <div className="prose">
          <ReactMarkdown>{postdata.body}</ReactMarkdown>
        </div>{' '}
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
  const post: Post = await getClient().fetch(getPostQuery, {
    slug: params.slug,
  })

  return {
    props: {
      postdata: post,
    },
  }
}
