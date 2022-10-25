import ExecutiveCard from "./ExecutiveCard"

export default function ExecBoard({ExecData}) {

    return (
        <div className="flex justify-around py-24">
            <div className="flex flex-wrap gap-x-16 gap-y-16">
                {ExecData.map((exec, index) => 
                    <ExecutiveCard executive={exec} key={index}/>
                )}
            </div>
        </div>
    )
}