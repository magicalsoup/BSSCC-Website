import Head from "next/head"
import Navbar from "../../components/Navbar"
import Banter from "../../components/Banter";
import { GetStaticPaths, GetStaticProps } from "next";
import { getResourceSections, getSortedResourcesData } from "../../lib/posts";
export default function Home ({
    section, sectionResourceData
}: {
    section: string;
    sectionResourceData: {
        id: string;
        date: string; 
        title: string; 
        authors: string;
        imgSrc: string; 
        blurb: string;
        priority: number;
        type: string;
    }[];
}) {

    return (
        <>
        <Head>
            <title>{section}</title>
        </Head>
        <Navbar/>
        <main>
            <div className="flex flex-col pb-32 bg-blue-gray-900">
                <Banter 
                    backgroundColor="bg-pink-500"
                    title={section}
                    description="This is for competitve topics that 
                    attain to competitive programming and preparing for those contests."
                />
            </div>
            <div className="flex bg-white flex-col">
                
            </div>
        </main>
    </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getResourceSections()
    return {
      paths,
      fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const sectionResourceData = getSortedResourcesData(params.section as string)
    
    const section = params.section

    return {
      props: {
        section,
        sectionResourceData
      }
    }
  }