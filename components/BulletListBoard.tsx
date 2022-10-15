export default function BulletListBoard ({allData}: {
    allData: {
        id: string;
        date: string; 
        title: string; 
        authors: string;
        imgSrc: string; 
        blurb: string;
        priority: number;
        type: string;
    }[];
}) {
    return (
        <div className="flex flex-col bg-blue-gray-900">
            {allData.map((item) => 
                <div className="">
                </div>
            )}
        </div>
    )
}