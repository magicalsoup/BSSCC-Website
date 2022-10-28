export default function ExecutiveCard ({executive}) {
    return (
        <div className="w-32 sm:w-48 md:w-52">
            <img src={executive.photo} className="object-scale-down"/>
            <div className="flex flex-col text-white text-center bg-zinc-900 py-4">
                <h1 className="font-raleway font-medium text-lg md:text-2xl">{executive.name}</h1>
                <p className="font-dmsans text-xs sm:text-sm md:text-md">{executive.role}</p>
            </div>
        </div>
    )
}