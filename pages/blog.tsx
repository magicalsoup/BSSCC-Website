import Head from "next/head";
import { getSortedBlogData } from "../lib/posts";
import { GetStaticProps } from "next";
import StarredPost from "../components/Blog/StarredPost";
import NormalPost from "../components/Blog/NormalPost";
import MailButton from "../components/Shared/MailButton";
import Navbar from "../components/Shared/Navbar";

export default function Home({ allBlogData }) {
  const blogName = "{Closing Bracket}";
  const starredPost = allBlogData.length > 0 ? allBlogData[0] : null;
  return (
    <>
      <Head>
        <title>{blogName}</title>
        <link rel="icon" href="../bsscc_icon.png" sizes="128x128"/>
      </Head>
      <Navbar />
      <main>
        <div className="flex flex-col min-h-screen bg-blue-gray-900 py-20">
          <div className="flex bg-closing-bracket bg-cover bg-center backdrop-blur-2xl py-8 sm:py-20">
            <div className="flex flex-col 2xl:items-center backdrop-blur-md bg-black/70 w-full py-6 px-4 sm:px-8 md:px-12 lg:px-32">
              <div className="2xl:w-[1280px]">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold blue-to-white-gradient py-2 font-raleway">
                  {blogName}
                </h1>
                <p className="text-lg sm:text-xl text-pink-600 font-dmsans">
                  Read, Learn, Implement.
                </p>
                <p className="text-sm sm:text-xl py-4 text-white font-dmsans">
                  Discover and learn new tech from our talented executives and
                  members.
                </p>
                <MailButton
                  text="Join our Mailing List"
                  tailwindCSS="bg-pink-500 text-white p-2"
                  linkTo="http://google.com"
                />
              </div>
            </div>
          </div>
          {allBlogData.length > 0 && (
            <div className="flex flex-col gap-y-6 md:gap-y-12 items-center px-4 sm:px-8 md:px-12 lg:px-32 py-20">
              <StarredPost post={starredPost} />
              <div className="flex flex-col md:flex-row w-full 2xl:w-[1280px] gap-y-6 gap-x-6">
                {allBlogData.slice(1).map((item, index) => (
                  <NormalPost post={item} key={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <style jsx>
        {`
          .blue-to-white-gradient {
            background: linear-gradient(
                89.95deg,
                rgba(226, 232, 240, 0.9) -12.79%,
                rgba(255, 255, 255, 0) 180.54%
              ),
              linear-gradient(
                270deg,
                rgba(125, 211, 252, 0.9) -12.13%,
                rgba(255, 255, 255, 0) 178.47%
              ),
              linear-gradient(
                270deg,
                rgba(165, 243, 252, 0.9) 111.93%,
                rgba(255, 255, 255, 0) 175.65%
              );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }
        `}
      </style>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allBlogData = getSortedBlogData();

  return {
    props: {
      allBlogData,
    },
  };
};
