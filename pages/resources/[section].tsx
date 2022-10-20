import Head from "next/head"
import Navbar from "../../components/Shared/Navbar"
import { GetStaticPaths, GetStaticProps } from "next";
import { getResourceSections, getSortedSectionData } from "../../lib/posts";
import ResourceItem from "../../components/Resources/ResourceItem";

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
        path: string;
    }[];
}) {

    return (
        <>
        <Head>
            <title>{section}</title>
        </Head>
        <Navbar/>
        <main>
            <div className="flex flex-col min-h-screen pb-32 bg-blue-gray-900 py-32">
                <div className="flex flex-col px-24 space-y-12">
                    <h1 className="text-5xl font-raleway font-bold white-to-pink-gradient">{section}</h1>
                    {sectionResourceData.map((resource, index) => 
                        <ResourceItem
                            linkTo={`/resources/${section}/${resource.id}`}
                            post={resource}
                            key={index}
                        />
                    )}
                </div>
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
    const sectionResourceData = getSortedSectionData(params.section as string)
    
    const section = params.section

    return {
      props: {
        section,
        sectionResourceData
      }
    }
  }