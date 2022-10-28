import { GetStaticProps } from "next";
import Head from "next/head";
import MailButton from "../components/Shared/MailButton";
import Navbar from "../components/Shared/Navbar";
import UpdateBoard from "../components/Index/UpdateBoard";
import { getAllSortedPostsData } from "../lib/posts";
import PolaroidLayer from "../components/Shared/PolaroidLayer";
import { FaDiscord, FaInstagram } from "react-icons/fa";
export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
    authors: string;
    imgSrc: string;
    blurb: string;
    type: string;
  }[];
}) {
  return (
    <>
      <Head>
        <title>BSSCC</title>
        <link rel="icon" href="../bsscc_icon.png" sizes="128x128" />
      </Head>
      <Navbar />
      <main>
        <div className="flex flex-col 2xl:items-center min-h-screen bg-blue-gray-900 px-5 sm:px-10 md:px-12 xl:px-32 py-24 sm:py-40">
          <div className="2xl:w-[1280px] space-y-16 md:space-y-24">
            <div className="flex gap-x-2 lg:pb-24">
              <div className="flex flex-col w-full sm:w-[640px]">
                <h1 className="text-3xl lg:text-5xl lg:leading-[70px] font-bold white-to-blue-gradient pb-8 font-raleway">
                  Bayview's <br></br>
                  student-organized <br></br>
                  computing community
                </h1>
                <div className="flex flex-wrap">
                  <div className="pr-4 pb-2">
                    <MailButton
                      text="Join Our Meetings"
                      linkTo="http://google.com"
                      tailwindCSS="bg-pink-600 text-white p-2 hover:text-pink-600 hover:bg-white"
                    />
                  </div>
                  <div className="">
                    <MailButton
                      text="Signup For Our Mailing List"
                      tailwindCSS="bg-transparent text-white p-2 hover:bg-sky-50 hover:text-blue-gray-900
                      outline outline-1 outline-white outline-offset-[-1px]"
                      linkTo="http://google.com"
                    />
                  </div>
                </div>
              </div>
              <PolaroidLayer
                imgSrc="/images/polaroids/index.jpg"
                responseWidth={768}
              />
            </div>

            <div className="flex flex-col">
              <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold py-8 font-raleway">
                Recent Updates
              </h1>
              <UpdateBoard allPostsData={allPostsData} />
            </div>

            <div className="flex flex-col">
              <h1 className="text-white pb-4 text-xl sm:text-2xl lg:text-3xl font-bold font-raleway">
                Join our Mailing List
              </h1>
              <p className="text-white py-2 text-sm sm:text-md md:text-lg font-dmsans">
                Join our mailing list to recieve email notifications about
                important news and upcoming events!
              </p>
              <MailButton
                text="Subscribe"
                tailwindCSS="bg-sky-50 text-blue-gray-900 px-4 py-2 hover:bg-blue-gray-500 hover:text-sky-50"
                linkTo="http://google.com"
              />
            </div>

            <div className="flex flex-col">
              <h1 className="text-white pb-4 text-xl sm:text-2xl lg:text-3xl font-bold font-raleway">
                Connect With Us!
              </h1>
              <p className="text-white py-2 text-sm sm:text-md md:text-lg font-dmsans">
                Drop by any of our social media outlets to learn more about us,
                keep up-to-date with our upcoming events or to chat with our
                members!
              </p>
              <div className="flex gap-x-8">
                <a
                  href="https://discord.gg/3cuc9zzS4a"
                  className="transition-all duration-200 bg-sky-50 p-2 rounded-2xl lg:hover:bg-blue-gray-500 text-blue-gray-900 lg:hover:text-sky-50 lg:hover:scale-105"
                >
                  <FaDiscord className="text-3xl md:text-4xl lg:text-5xl" />
                </a>
                <a
                  href="https://www.instagram.com/bayviewcomputerclub/"
                  className="transition-all duration-200 bg-sky-50 p-2 rounded-2xl lg:hover:bg-blue-gray-500 text-blue-gray-900 lg:hover:text-sky-50 lg:hover:scale-105"
                >
                  <FaInstagram className="text-3xl md:text-4xl lg:text-5xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getAllSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
