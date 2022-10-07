import Link from "next/link";
import Date from "./Date";
export default function NormalPost({post}: {
    post: {
        date: string;
        title: string;
        id: string;
        authors: string;
        imgSrc: string;
        blurb: string;
    }
}) {
    return (
        <Link href={`/blog/${post.id}`}>
            <a className="flex flex-col bg-blue-gray-700 w-1/2"> 
                <img src={post.imgSrc} className="h-72 object-cover"/>
                <div className="flex flex-col p-4">
                    <div className="flex flex-row space-x-2 text-gray-300 text-xs">
                        <p>{post.authors}</p>
                        <span>|</span>
                        <Date dateString={post.date}/>
                    </div>
                    <h1 className="font-bold text-xl text-gray-300 py-2">
                        {post.title}
                    </h1>
                    <p className="text-gray-200  text-base">
                        {post.blurb}
                    </p>
                </div>
            </a>
        </Link>
    )
}