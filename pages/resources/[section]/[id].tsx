import { getAllResourceIds, getResourcesData } from '../../../lib/posts'
import Link from 'next/link'
import Head from 'next/head'
import Date from '../../../components/Shared/Date'
import { GetStaticProps, GetStaticPaths } from 'next'
import Navbar from '../../../components/Shared/Navbar'
import { useEffect } from 'react'
import { MDXRemote } from "next-mdx-remote";

export default function Post({section, frontMatter, source}) {
  
  const tableOfContents = []

  useEffect(() => {
    let headers = document.getElementsByTagName("h3");
    console.log('hello')
    console.log(headers.length)

    for(let i=0; i<headers.length; i++) {
      const headerName = (headers[i].textContent).replaceAll(" ", "");
      console.log(headerName);
      headers[i].id = `#${headerName}`;
    }

  }, [])

  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <Navbar/>
      <main>
        <div className="flex justify-between py-32 px-24 bg-orange-50">
          <div className="flex flex-col">
            <h1 className="font-raleway text-xl py-2">Table of Contents</h1>
            <p>
              Hello
            </p>
          </div>
          <div className="flex flex-col w-4/5">
            <div className="flex self-start flex-col">
              <h1 className="font-bold text-3xl font-raleway">{frontMatter.title}</h1>
              <div className="flex text-sm font-dmsans">
                <p>{frontMatter.authors}</p>
              </div>
              <div className="text-sm font-dmsans">
                <Date dateString={frontMatter.date} />
              </div>
            </div>

            <div className="py-4">
                <img className="" src={frontMatter.imgSrc}/>
            </div>

            <div className="prose text-gray-900 prose-lg font-dmsans">
            <MDXRemote {...source} />
              <Link href={`/resources/${section}`}>
                <a className="text-sky-600 font-bold">← Back to {section}</a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllResourceIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const {frontMatter, mdxSource} = await getResourcesData(params.id as string, params.section as string)
  const section = params.section

  return {
    props: {
      section,
      frontMatter,
      source: mdxSource
    }
  }
}
