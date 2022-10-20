import Head from "next/head"
import Navbar from "../components/Shared/Navbar"
import Link from "next/link"
import { GetStaticProps } from "next"
import { getResourceSections} from "../lib/posts"
import Polaroid from "../components/Shared/Polaroid"
export default function Home ({
    sectionFolders
} : {
    sectionFolders: {
        params: {
         section: string;
        }
    }[];
}) {
    return (
        <>
            <Head>
                <title>Resources</title>
            </Head>
            <Navbar/>
            <main>
                <div className="flex justify-between p-32 h-screen bg-blue-gray-900">
                    <div className="">
                        <div className="flex flex-col py-8">
                            <h1 className="font-raleway text-5xl white-to-pink-gradient">Resources</h1>
                            <p className="font-dmsans text-white text-lg pt-4">
                                Complementary resources for our meeetings.
                            </p>
                        </div>
                        <div className="flex flex-col">
                            {sectionFolders.map((obj) => 
                                <Link href={`/resources/${obj.params.section}`}>
                                    <a className="text-white text-3xl font-bold font-dmsans 
                                    py-6 white-to-blue-gradient w-fit">
                                        {obj.params.section}
                                    </a>
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className="pt-16">
                        <Polaroid
                            imgSrc="https://userstyles.org/style_screenshots/215513_after.png"
                        />
                    </div>
                </div>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const sectionFolders = getResourceSections()

    return {
      props: {
        sectionFolders,
      }
    }
  }