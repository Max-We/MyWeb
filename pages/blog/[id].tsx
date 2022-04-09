import Head from 'next/head'
import ArticleDate from '../../components/blog/article/article-date'
import { ArticleProps } from '../../components/blog/article/article.model'
import { getAllPostIds, getPostData } from '../../lib/articles'
import utilStyles from '../../styles/utils.module.css'

// export async function getStaticProps({ params }) {
//   const postData = await getPostData(params.id)
//   return {
//     props: {
//       postData,
//     },
//   }
// }

// export async function getStaticPaths() {
//   const paths = getAllPostIds()
//   return {
//     paths,
//     fallback: false,
//   }
// }

export default function Article(props: ArticleProps) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{props.title}</h1>
        <div className={utilStyles.lightText}>
          <ArticleDate date={props.creationDate} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: props.contentHtml }} />
      </article>
    </>
  )
}
