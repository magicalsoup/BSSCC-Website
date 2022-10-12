import Head from "next/head"
import Banter from "../components/Banter"
import Navbar from "../components/Navbar"
export default function Home () {
    return (
        <>
            <Head>
                <title>Resources</title>
            </Head>
            <Navbar/>
            <main>
                <div className="flex flex-col pb-32 bg-blue-gray-900">
                    <Banter 
                        backgroundColor="bg-pink-500"
                        title="Competitve Beginner"
                        description="This is for competitve topics that 
                        attain to competitive programming and preparing for those contests."
                    />
                </div>
            </main>
        </>
    )
}