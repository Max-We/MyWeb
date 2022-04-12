import { getClient } from '@lib/sanity'
import ArticleDate from 'components/blog/article/article-date'
import { groq } from 'next-sanity'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { Post } from 'schema'
// import utilStyles from '../../styles/utils.module.css'

export async function getStaticProps({
  params,
}: {
  params: { slug: Post['slug'] }
}) {
  const query = groq`
        *[_type == "post" && slug.current == "${params.slug}"][0]
    `
  const post: Post = await getClient().fetch(query)

  return {
    props: {
      postdata: post,
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  const query = groq`
        *[_type == "post"] { slug }
    `
  const posts: [{ slug: Post['slug'] }] = await getClient().fetch(query)

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
