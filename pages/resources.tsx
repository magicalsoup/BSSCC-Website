import Head from "next/head";
import Navbar from "../components/Shared/Navbar";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getResourceSections } from "../lib/posts";
import PolaroidLayer from "../components/Shared/PolaroidLayer";
export default function Home({
  sectionFolders,
}: {
  sectionFolders: {
    params: {
      section: string;
    };
  }[];
}) {
  return (
    <>
      <Head>
        <title>Resources</title>
        <link rel="icon" href="../bsscc_icon.png" sizes="128x128" />
      </Head>
      <Navbar pageNum={3}/>
      <main>
        <div className="flex flex-col items-center px-8 md:px-16 xl:px-32 py-32 h-screen bg-blue-gray-900">
          <div className="w-full 2xl:w-[1280px]">
            <div className="flex">
              <div className="flex flex-col items-center sm:items-start w-full py-8 md:w-1/2">
                <h1 className="font-raleway font-bold text-3xl lg:text-5xl white-to-pink-gradient">
                  Resources
                </h1>
                <p className="font-dmsans text-white text-md md:text-lg sm:pt-2 md:pt-4">
                  Complementary resources for our meeetings.
                </p>
                <div className="flex flex-col pt-6 gap-y-6">
                  {sectionFolders.map((obj, index) => (
                    <Link href={`/resources/${obj.params.section}`} key={index}>
                      <a className="bg-stone-200 text-blue-gray-900 text-xl lg:text-2xl font-raleway px-6 lg:px-14 py-2 rounded-lg transition-all duration-200 ease-in-out hover:bg-blue-gray-500 hover:text-stone-200">
                        {obj.params.section}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <PolaroidLayer
                imgSrc="/images/polaroids/resources.jpg"
                responseWidth={640}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const sectionFolders = getResourceSections();

  return {
    props: {
      sectionFolders,
    },
  };
};
