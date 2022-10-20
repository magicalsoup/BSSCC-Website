import { getAllBlogIds, getBlogData } from '../../lib/posts'
import Link from 'next/link'
import Head from 'next/head'
import Date from '../../components/Shared/Date'
import { GetStaticProps, GetStaticPaths } from 'next'
import Navbar from '../../components/Shared/Navbar'
import { MDXRemote } from "next-mdx-remote";

export default function Post({frontMatter, source}) {

  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <Navbar/>
      <main>
        <div className="flex flex-col bg-orange-50 items-center py-32 px-24">
          <div className="flex flex-col space-y-6 text-center py-8">
            <h1 className="font-bold text-3xl">{frontMatter.title}</h1>
            <div className="flex justify-center text-sm">
              <p>{frontMatter.authors}</p>
            </div>
            <div className="text-sm">
              <Date dateString={frontMatter.date} />
            </div>
          </div>

          <div className="py-8">
              <img className="" src={frontMatter.imgSrc}/>
          </div>
          <article className="py-12 prose prose-blog prose-xl">
            <MDXRemote {...source} />
            <Link href="/blog">
              <a className="text-sky-600 font-bold">← Back to Blogs</a>
            </Link>
          </article>
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
  const {frontMatter, mdxSource} = await getBlogData(params.id as string)
  return {
    props: {
      frontMatter,
      source: mdxSource
    }
  }
}
