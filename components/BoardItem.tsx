export default function BoardItem ({title, authors, blurb}: {
    title: string;
    authors: string;
    blurb: string;
}) {
    return (
        <div className="py-6">
            <div className="flex flex-col bg-white/20 p-10 w-64 rounded-xl">
                <h1 className="text-white text-lg font-bold">{title}</h1>
                <h1 className="text-gray-200 text-sm font-medium py-2">{authors}</h1>
                <p className="text-gray-200 text-sm">
                    {blurb}
                </p>
            </div>
        </div>
    )
}