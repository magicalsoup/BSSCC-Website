export default function AccordionItem({item}) {
    return (
        <div className="py-2">
            <div className="flex accordion py-2 font-raleway w-fit">
                <button className="pr-12 text-5xl mb-2">+</button>
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