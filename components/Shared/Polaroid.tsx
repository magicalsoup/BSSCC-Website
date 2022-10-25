export default function Polaroid(props) {
    return (
        <div className="bg-white w-96 h-96"> 
            <div className="flex flex-col items-center px-4 pt-4">
                <img className="h-72 w-full object-cover" src={props.imgSrc}/> 
                <h1 className="text-center p-6 text-2xl font-raleway">
                    {props.name}
                </h1>
            </div>
        </div>
    )
}