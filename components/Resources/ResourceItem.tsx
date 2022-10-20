import Link from "next/link";
import Date from "../Shared/Date";

export default function ResourceItem ({linkTo, post}) {
    const frontMatter = post.frontMatter
    return (
        <Link href={linkTo}>
            <a className="flex flex-col bg-blue-gray-700 px-10 py-6">
                <div className="flex justify-between">
                    <h1 className="text-white font-raleway text-2xl font-bold">
                        {frontMatter.title}
                    </h1>
                    <div className="self-center text-gray-300 text-sm font-dmsans">
                        <Date dateString={frontMatter.date}/>
                    </div>
                </div>
                <p className="text-gray-300 text-sm font-dmsans">
                    {frontMatter.authors}
                </p>
                <p className="text-gray-300 font-dmsans py-2">
                    {frontMatter.blurb}
                </p>    
            </a>
        </Link>
    )
}