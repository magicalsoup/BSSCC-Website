import ExecutiveCard from "./ExecutiveCard"
import { useState } from "react"

export default function ExecBoard({ExecData}) {

    const length = ExecData.length
    const [curSlide, setCurSlide] = useState([...ExecData])
    const [index, setIndex] = useState(0)

    const nextIndex = (index: number) => {
        return (index + 1) % length
    }

    const prevIndex = (index: number) => {
        return (index - 1 + length) % length
    }

    console.table(curSlide)

    return (
        <div className="flex justify-around h-full py-12">
            <div className="pt-24">
                <ExecutiveCard executive={ExecData[prevIndex(index)]}/>
            </div>
            <div>
                <ExecutiveCard executive={ExecData[index]}/>
            </div>
            <div className="pt-12">
                <ExecutiveCard executive={ExecData[nextIndex(index)]}/>
            </div>
        </div>
    )
}