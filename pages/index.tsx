import { GetStaticProps } from "next";
import Head from "next/head";
import MailButton from "../components/Shared/MailButton";
import Navbar from "../components/Shared/Navbar";
import Polaroid from "../components/Shared/Polaroid";
import UpdateBoard from "../components/Index/UpdateBoard";
import { getAllSortedPostsData } from "../lib/posts";
import PolaroidLayer from "../components/Shared/PolaroidLayer";

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
      </Head>
      <Navbar/>
      <main>
        <div className="flex flex-col space-y-28 bg-blue-gray-900 p-32">

          <div className="flex">
            <div className="flex flex-col">
              <h1 className="leading-relaxed text-5xl font-bold white-to-blue-gradient py-4 font-raleway">
                Bayview's <br></br>
                student-organized <br></br>
                computing community
              </h1>
              <div className="space-x-6">
                <MailButton
                  text="Join Our Meetings"
                  linkTo="http://google.com"
                  tailwindCSS="bg-pink-500 text-white p-2"
                />
                <MailButton
                  text="Signup For Our Mailing List"
                  tailwindCSS="bg-transparent text-white p-2 outline outline-1 outline-white outline-offset-[-1px]" 
                  linkTo="http://google.com"
                />
              </div>
            </div>
            <PolaroidLayer
              imgSrc="https://img.freepik.com/free-vector/linear-vintage-vaporwave-background_52683-58477.jpg"  
            />
          </div>


          <div className="flex flex-col">
              <h1 className="text-white text-3xl font-bold py-12 font-raleway">Recent Updates</h1>
              <UpdateBoard allPostsData={allPostsData}/>
          </div>
          
          <div className="flex flex-col">
            <h1 className="text-white text-3xl font-bold font-raleway">Join our Mailing List</h1>
            <p className="text-white py-8 text-lg font-dmsans">
              Join our mailing list to recieve email notifications about important news and upcoming events!
            </p>
            <MailButton
              text="Subscribe"
              tailwindCSS="bg-sky-50 text-blue-gray-900 px-4 py-2"
              linkTo="http://google.com"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-white text-3xl font-bold font-raleway">Connect With Us!</h1>
            <p className="text-white py-8 text-lg font-dmsans">Drop by any of our social media outlets to learn more about us, 
              keep up-to-date with our upcoming events or to chat with our members!
            </p>
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
