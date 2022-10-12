export default function Polaroid(props) {
    return (
        <div className="bg-white w-96"> 
            <div className="flex flex-col items-center px-4 pt-4">
                {/* TODO fix image sizing and make it responsive*/}
                <img className="object-scale-down" src={props.imgSrc}/> 
                <h1 className="text-center p-8 text-2xl font-raleway">
                    {props.name}
                </h1>
            </div>
        </div>
    )
}