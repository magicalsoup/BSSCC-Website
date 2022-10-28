import Link from "next/link"
export default function BoardItem ({id, title, authors, blurb, path}: {
    id: string;
    title: string;
    authors: string;
    blurb: string;
    path: string
}) {
    return (
        <Link href={`/${path}/${id}`}>
            <a className="flex justify-center py-6">
                <div className="relative flex flex-col bg-white/20 p-6 w-80 h-40 sm:w-64 sm:h-48 md:w-[330px] lg:w-72 rounded-xl">
                    <h1 className="truncate text-white text-lg font-bold font-raleway hover:underline hover:decoration-2">{title}</h1>
                    <h1 className="text-gray-200 text-sm font-medium py-2 font-raleway">{authors}</h1>
                    <p className="max-h-16 truncate sm:whitespace-normal text-gray-200 text-sm font-dmsans">
                        {blurb}
                    </p>
                    <div className="absolute bottom-0 right-0 pr-8 pb-4">
                        <p className="self-end justify-self-end underline text-sm text-white">Read more</p> 
                    </div>
                </div>
            </a>
        </Link>
    )
}