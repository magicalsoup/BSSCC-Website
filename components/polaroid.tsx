
export default function Polaroid(props) {
    return (
        <div className="bg-white">
            <div className="flex flex-col items-center px-4 pt-4">
                <img className="object-scale-down" src={props.imgSrc}/>
                <div className="text-center p-8 text-2xl">
                    {props.name}
                </div>
            </div>
            
        </div>
    )
}