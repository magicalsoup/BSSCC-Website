import Link from "next/link";
import Date from "../Shared/Date";
export default function StarredPost({post}) {
    const data = post.frontMatter
    return (
        <Link href={`/blog/${post.id}`}>
            <a className="flex flex-col bg-blue-gray-700 w-full 2xl:max-w-[1280px] transition-all duration-500 ease-in-out hover:scale-[1.01]"> 
                <img src={data.imgSrc} className="max-h-96 object-cover"/>
                <div className="bg-transparent p-4">
                    <div className="flex flex-row space-x-2 text-gray-300 text-xs">
                        <p className="font-dmsans">
                            {data.authors}
                        </p>
                        <span>|</span>
                        <Date dateString={data.date}/>
                    </div>
                    <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-200 py-2 sm:py-4 font-raleway">
                        {data.title}
                    </h1>
                    <p className="text-gray-300 text-sm sm:text-base font-dmsans">
                        {data.blurb}
                    </p>
                </div>
            </a>
        </Link>
    )
}