import { getAllResourceIds, getResourcesData } from "../../../lib/posts";
import Link from "next/link";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import Navbar from "../../../components/Shared/Navbar";
import PostBanter from "../../../components/Shared/PostBanter";
import { MDXRemote } from "next-mdx-remote";
import CaptionedImage from "../../../components/Shared/CaptionedImage";

export default function Post({ section, frontMatter, source }) {
  const components = { img: (props) => <CaptionedImage {...props} /> };

  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <link rel="icon" href="../bsscc_icon.png" sizes="128x128"/>
      </Head>
      <Navbar />
      <main>
        <div className="flex flex-col items-center py-32 px-4 sm:px-24 bg-orange-50">
          <PostBanter
            authors={frontMatter.authors}
            title={frontMatter.title}
            date={frontMatter.date}
          />

          {/* <div className="py-4">
            <iframe
              src={frontMatter.slidesSrc}
              className="w-[480px] h-[300px] lg:w-[960px] lg:h-[570px] 2xl:w-[1440px] 2xl:w-[840px]"
              allowFullScreen={true}
            />
          </div> */}

          <article className="prose text-gray-900 sm:prose-lg font-dmsans">
            <MDXRemote {...source} components={components} />
            <Link href={`/resources/${section}`}>
              <a className="text-sky-600 font-bold">← Back to {section}</a>
            </Link>
          </article>
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllResourceIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { frontMatter, mdxSource } = await getResourcesData(
    params.id as string,
    params.section as string
  );
  const section = params.section;
  return {
    props: {
      section,
      frontMatter,
      source: mdxSource,
    },
  };
};
