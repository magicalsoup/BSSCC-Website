
import Polaroid from "./Polaroid"

export default function PolaroidLayer(props) {
    return (
        <div className="relative w-1/2">
            <div className="absolute right-0 origin-center -rotate-12">
                <Polaroid imgSrc={props.imgSrc}/>
            </div>
            <div className="absolute right-0">
                <Polaroid imgSrc={props.imgSrc}/>
            </div>
        </div>
    )
}