import { getAllBlogIds, getBlogData } from '../../lib/posts'
import Link from 'next/link'
import Head from 'next/head'
import Date from '../../components/Date'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    imgSrc: string
    authors: string
    contentHtml: string
  }
}) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <main>
        <div className="flex flex-col items-center py-20 px-24">
          <div className="flex flex-col space-y-6 text-center py-8">
            <h1 className="font-bold text-3xl">{postData.title}</h1>
            <div className="flex justify-center text-sm">
              <p>{postData.authors}</p>
            </div>
            <div className="text-sm">
              <Date dateString={postData.date} />
            </div>
          </div>

          <div className="py-8">
              <img className="" src={postData.imgSrc}/>
          </div>
          <div className="py-12 prose prose-xl">
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            <Link href="/blog">
              <a className="text-sky-600 font-bold">← Back to Blogs</a>
            </Link>
          </div>

        </div>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllBlogIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getBlogData(params.id as string)
  return {
    props: {
      postData
    }
  }
}
