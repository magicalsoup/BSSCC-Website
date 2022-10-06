import Link from "next/link";
import Date from "./date";
export default function StarredPost({post,} : {
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
        <Link href={`/posts/${post.id}`}>
            <a className="flex flex-col bg-blue-gray-700 w-full"> 
                <img src={post.imgSrc} className="max-h-96 object-cover"/>
                <div className="bg-transparent p-4">
                    <div className="flex flex-row space-x-2 text-gray-300 text-xs">
                        <p>
                            {post.authors}
                        </p>
                        <span>|</span>
                        <Date dateString={post.date}/>
                    </div>
                    <h1 className="font-bold text-4xl text-gray-200 py-4">
                        {post.title}
                    </h1>
                    <p className="text-gray-300 text-base">
                        {post.blurb}
                    </p>
                </div>
            </a>
        </Link>
    )
}