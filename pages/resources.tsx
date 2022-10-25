import Head from "next/head"
import Navbar from "../components/Shared/Navbar"
import Link from "next/link"
import { GetStaticProps } from "next"
import { getResourceSections} from "../lib/posts"
import Polaroid from "../components/Shared/Polaroid"
import PolaroidLayer from "../components/Shared/PolaroidLayer"
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
                <div className="flex p-32 h-screen bg-blue-gray-900">
                    <div className="w-1/2">
                        <div className="flex flex-col py-8">
                            <h1 className="font-raleway font-bold text-5xl white-to-pink-gradient">Resources</h1>
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
                    <PolaroidLayer
                        imgSrc="https://userstyles.org/style_screenshots/215513_after.png"
                    />
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