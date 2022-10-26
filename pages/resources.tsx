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
      </Head>
      <Navbar />
      <main>
        <div className="flex flex-col items-center px-8 md:px-16 lg:px-32 py-32 h-screen bg-blue-gray-900">
          <div className="w-full 2xl:w-[1280px]">
            <div className="flex">
              <div className="flex flex-col items-center sm:items-start w-full py-8 md:w-1/2">
                <h1 className="font-raleway font-bold text-3xl lg:text-5xl white-to-pink-gradient">
                  Resources
                </h1>
                <p className="font-dmsans text-white text-md md:text-lg sm:pt-2 md:pt-4">
                  Complementary resources for our meeetings.
                </p>
                <div className="flex flex-col pt-6">
                  {sectionFolders.map((obj) => (
                    <Link href={`/resources/${obj.params.section}`}>
                      <a className="text-white text-xl lg:text-3xl font-bold font-dmsans py-2 lg:py-6 white-to-blue-gradient w-fit">
                        {obj.params.section}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <PolaroidLayer imgSrc="/images/polaroids/resources.jpg" responseWidth={640}/>
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
