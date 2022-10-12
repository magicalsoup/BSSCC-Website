import Link from "next/link"
export default function BoardItem ({id, title, authors, blurb, type}: {
    id: string;
    title: string;
    authors: string;
    blurb: string;
    type: string
}) {

    return (
        <Link href={`/${type}/${id}`}>
            <a className="py-6">
                <div className="flex flex-col bg-white/20 p-6 w-64 h-48 rounded-xl">
                    <h1 className="truncate text-white text-lg font-bold font-raleway">{title}</h1>
                    <h1 className="text-gray-200 text-sm font-medium py-2 font-raleway">{authors}</h1>
                    <p className="max-h-16 text-ellipsis overflow-hidden text-gray-200 text-sm font-dmsans">
                        {blurb}
                    </p>
                </div>
            </a>
        </Link>
    )
}