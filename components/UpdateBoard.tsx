import BoardItem from "./BoardItem"
export default function UpdateBoard() {

    let tmpData = [
        {
            title: "Title goes Here",
            authors: "Author title",
            blurb: "Are you interested in organizing program-wide events, reaching out to industry professionals, o...",
        },
        {
            title: "Title goes Here",
            authors: "Author title",
            blurb: "Are you interested in organizing program-wide events, reaching out to industry professionals, o...",
        },
        {
            title: "Title goes Here",
            authors: "Author title",
            blurb: "Are you interested in organizing program-wide events, reaching out to industry professionals, o...",
        },
        {
            title: "Title goes Here",
            authors: "Author title",
            blurb: "Are you interested in organizing program-wide events, reaching out to industry professionals, o...",
        },
        {
            title: "Title goes Here",
            authors: "Author title",
            blurb: "Are you interested in organizing program-wide events, reaching out to industry professionals, o...",
        },
        {
            title: "Title goes Here",
            authors: "Author title",
            blurb: "Are you interested in organizing program-wide events, reaching out to industry professionals, o...",
        },
    ]

    return (
        <div className="bg-white/10 p-12 rounded-xl">
            <div className="flex flex-wrap justify-between content-between">
                {tmpData.map((item, index) => 
                    <BoardItem 
                        key={index}
                        title={item.title}
                        authors={item.authors}
                        blurb={item.blurb}
                    />
                )}
            </div>
        </div>
    )
}