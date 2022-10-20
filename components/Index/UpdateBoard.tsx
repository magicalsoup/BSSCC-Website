import { GetStaticProps } from "next";
import { getAllSortedPostsData } from "../../lib/posts";
import BoardItem from "./BoardItem"
export default function UpdateBoard({allPostsData,}) {
    
     

    return (
        <div className="bg-white/10 p-12 rounded-xl">
            <div className="flex flex-wrap justify-around content-between">
                {allPostsData.map((post, index) => 
                    <BoardItem 
                        key={index}
                        id={post.frontMatter.id}
                        title={post.frontMatter.title}
                        authors={post.frontMatter.authors}
                        blurb={post.frontMatter.blurb}
                        path={post.path}
                    />
                )}
            </div>
        </div>
    )
}

