import Link from "next/link";
import Date from "./Date";

export default function ResourceItem ({linkTo, post}: {
    linkTo: string,
    post: {
        id: string;
        date: string; 
        title: string; 
        authors: string;
        imgSrc: string; 
        blurb: string;
    };
}) {
    return (
        <Link href={linkTo}>
            <a className="flex flex-col bg-blue-gray-700 px-10 py-6">
                <div className="flex justify-between">
                    <h1 className="text-white font-raleway text-2xl font-bold">
                        {post.title}
                    </h1>
                    <div className="self-center text-gray-300 text-sm font-dmsans">
                        <Date dateString={post.date}/>
                    </div>
                </div>
                <p className="text-gray-300 text-sm font-dmsans">
                    {post.authors}
                </p>
                <p className="text-gray-300 font-dmsans py-2">
                    {post.blurb}
                </p>    
            </a>
        </Link>
    )
}