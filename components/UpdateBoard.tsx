import { GetStaticProps } from "next";
import { getAllSortedPostsData } from "../lib/posts";
import BoardItem from "./BoardItem"
export default function UpdateBoard({
    allPostsData,
    }: {
    allPostsData: {
        date: string;
        title: string;
        id: string;
        authors: string;
        imgSrc: string;
        blurb: string;
        type: string;
    }[];
}) {
    
    return (
        <div className="bg-white/10 p-12 rounded-xl">
            <div className="flex flex-wrap justify-around content-between">
                {allPostsData.map((item, index) => 
                    <BoardItem 
                        key={index}
                        id={item.id}
                        title={item.title}
                        authors={item.authors}
                        blurb={item.blurb}
                        type={item.type}
                    />
                )}
            </div>
        </div>
    )
}

