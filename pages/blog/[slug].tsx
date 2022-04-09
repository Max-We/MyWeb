import { getClient, usePreviewSubscription } from '@lib/sanity'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { groq } from 'next-sanity'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import ArticleDate from '../../components/blog/article/article-date'
import { ArticleProps } from '../../components/blog/article/article.model'
import { GetStaticPaths } from 'next'

// import utilStyles from '../../styles/utils.module.css'

export const getStaticProps: GetStaticProps = async (params) => {
  const query = groq`
        *[_type == "post" && slug.current == "${params.params.slug}"][0]
    `
  const post = await getClient(false).fetch(query)

  return {
    props: {
      postdata: post,
      preview: false,
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = groq`
        *[_type == "post"] { slug }
    `
  const posts = await getClient(false).fetch(query)

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

export default function Article({
  props,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { postdata, preview } = props

  // Todo: What is preview used for?
  //   const router = useRouter()
  //   const { data: post } = usePreviewSubscription(query, {
  //     initialData: postdata,
  //     enabled: preview || router.query.preview !== undefined,
  //   })
  return (
    <>
      <Head>
        <title>{postdata.title}</title>
      </Head>
      <article>
        <h1 className="mb-6 text-5xl">{postdata.title}</h1>
        {/* Todo: Parse date from sanity */}
        {/* <div className="">
          <ArticleDate date={postdata.publishedAt} />
        </div> */}
        <div className="prose">
          <ReactMarkdown>{postdata.body}</ReactMarkdown>
        </div>{' '}
      </article>
    </>
  )
}
