import { useState } from "react"

export default function AccordionItem({item}) {
    const [symbol, setSymbol] = useState("+")
    return (
        <div className="py-2">
            <div className="flex accordion py-2 font-raleway w-fit" onClick={() => 
                setSymbol((prevSymbol) => prevSymbol == "+"? "-" : "+")}>
                <button className="pr-12 text-5xl mb-2">{symbol}</button>
                <button className="sm:text-2xl text-left">{item.title}</button>
            </div>
            <p className="sm:text-lg panel pl-20 text-gray-300 font-dmsans"> 
                {item.content}
            </p>
            <style jsx>{`
                .accordion {
                    background-color: transparent;
                    color: white;   
                }
            
                .panel {
                    background-color: transparent;
                    overflow: hidden;
                    max-height: 0;
                    transition: max-height 0.2s ease-out;
                }
            `}</style>
        </div>
    )
}