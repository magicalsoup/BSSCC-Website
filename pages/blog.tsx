import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";
import StarredPost from "../components/StarredPost";
import NormalPost from "../components/NormalPost";
import MailButton from "../components/MailButton";
import Navbar from "../components/Navbar";

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
    }[];
    }) {
        
    const blogName = "{Closing Bracket}"
    const starredPost = allPostsData? allPostsData[0] : null; // TODO need to swap null with a dummy in case there are no posts
                                                              // TODO need to change sort function in lib/posts.ts to put starred posts at the front
    
    return (
        <>
        <Head>
            <title>{blogName}</title>
        </Head>
        <Navbar/>
        <main>
            <div className="flex flex-col bg-blue-gray-900 py-20">
                <div className="bg-white backdrop-blur-2xl py-20"> {/*TODO add background img*/}
                    <div className="flex flex-col bg-black/70 w-full py-6 px-32">
                        <h1 className="text-5xl font-bold blue-to-white-gradient py-2">
                            {blogName}
                        </h1>
                        <p className="text-xl text-pink-600">Read, Learn, Implement.</p>
                        <p className="text-xl py-4 text-white">
                            Discover and learn new tech from our talented executives and members.
                        </p>
                        <MailButton
                            text="Join our Mailing List"
                            tailwindCSS="bg-pink-500 text-white p-2"
                            linkTo="http://google.com"
                        />
                    </div>
                </div>
                <div className="flex flex-col space-y-12 items-center px-32 py-20">
                    <StarredPost post={starredPost}/>
                    <div className="flex w-full space-x-6">
                        {allPostsData.slice(1).map((item, index) => 
                            <NormalPost post={item} key={index}/>
                        )}
                    </div>
                </div>
            </div>
        </main>
        <style jsx>{`
            .blue-to-white-gradient{
                background: linear-gradient(89.95deg, rgba(226, 232, 240, 0.9) -12.79%, rgba(255, 255, 255, 0) 180.54%), linear-gradient(270deg, rgba(125, 211, 252, 0.9) -12.13%, rgba(255, 255, 255, 0) 178.47%), linear-gradient(270deg, rgba(165, 243, 252, 0.9) 111.93%, rgba(255, 255, 255, 0) 175.65%);
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
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
