import Head from "next/head";
import Navbar from "../../components/Shared/Navbar";
import { GetStaticPaths, GetStaticProps } from "next";
import { getResourceSections, getSortedSectionData } from "../../lib/posts";
import ResourceItem from "../../components/Resources/ResourceItem";

export default function Home({ section, sectionResourceData }) {
  return (
    <>
      <Head>
        <title>{section}</title>
        <link rel="icon" href="../bsscc_icon.png" sizes="128x128"/>
      </Head>
      <Navbar />
      <main>
        <div className="flex flex-col 2xl:items-center min-h-screen pb-32 bg-blue-gray-900 py-32">
          <div className="2xl:w-[1280px]">
            <div className="flex flex-col px-8 md:px-24 space-y-4 lg:space-y-12">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-raleway font-bold white-to-pink-gradient">
                {section}
              </h1>
              {sectionResourceData.map((resource, index) => (
                <ResourceItem
                  linkTo={`/resources/${section}/${resource.id}`}
                  post={resource}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getResourceSections();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const sectionResourceData = getSortedSectionData(params.section as string);
  const section = params.section;

  return {
    props: {
      section,
      sectionResourceData,
    },
  };
};
