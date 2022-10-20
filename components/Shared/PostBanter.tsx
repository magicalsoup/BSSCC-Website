import PostAuthors from "./PostAuthors"
import Date from "./Date"
export default function PostBanter({title, authors, date} : {
    title: string
    authors: string
    date: string
}) {
    return (
        <div className="flex flex-col text-center py-8 w-96">
            <h1 className="font-bold text-3xl">{title}</h1>
            <PostAuthors authors={authors}/>
            <div className="text-md text-gray-600 font-medium font-dmsans">
            <Date dateString={date} />
            </div>
        </div>
    )
}