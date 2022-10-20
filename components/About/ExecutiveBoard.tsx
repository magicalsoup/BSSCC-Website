import ExecutiveCard from "./ExecutiveCard"
import { useState } from "react"

export default function ExecBoard({ExecData}) {

    const [curSlide, setCurSlide] = useState([...ExecData])
    const [index, setIndex] = useState(0)

    

    console.table(curSlide)


    return (
        <div className="flex justify-between">
            
       
            
        </div>
    )
}