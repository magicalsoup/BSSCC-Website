import BoardItem from "./BoardItem"
export default function UpdateBoard({allPostsData,}) {

    return (
        <div className="bg-white/10 p-12 rounded-xl">
            <div className="grid grid-cols-3">
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

