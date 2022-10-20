import Link from "next/link";
import Date from "../Shared/Date";
export default function NormalPost({post}) {
    const data = post.frontMatter
    return (
        <Link href={`/blog/${post.id}`}>
            <a className="flex flex-col bg-blue-gray-700 w-1/2"> 
                <img src={data.imgSrc} className="h-72 object-cover"/>
                <div className="flex flex-col p-4">
                    <div className="flex flex-row space-x-2 text-gray-300 text-xs font-dmsans">
                        <p>{data.authors}</p>
                        <span>|</span>
                        <Date dateString={data.date}/>
                    </div>
                    <h1 className="font-bold text-xl text-gray-300 py-2 font-raleway">
                        {data.title}
                    </h1>
                    <p className="text-gray-200 text-base font-dmsans">
                        {data.blurb}
                    </p>
                </div>
            </a>
        </Link>
    )
}