export default function AccordionItem({item, index}) {
    return (
        <div className="py-2" key={index}>
            <div className="accordion flex text-2xl py-2 font-raleway">
                <button className="pr-12 text-5xl mb-2">+</button>
                <button className="inline-block align-text-bottom">{item.title}</button>
            </div>
            <p className="panel pl-20 text-gray-300 font-dmsans"> 
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