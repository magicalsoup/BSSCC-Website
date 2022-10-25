export default function ExecutiveCard ({executive}) {
    return (
        <div className="w-52">
            <img src={executive.photo} className="object-scale-down"/>
            <div className="flex flex-col text-white text-center bg-black py-4">
                <h1 className="font-raleway font-medium text-2xl">{executive.name}</h1>
                <p className="font-dmsans text-xl">{executive.role}</p>
            </div>
        </div>
    )
}