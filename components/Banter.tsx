
export default function Banter ({title, description, backgroundColor}: {
    title: string;
    description: string;
    backgroundColor: string;
}) {
    const mainStyle = `${backgroundColor} flex justify-center items-center py-32`
    return (
        <div className={mainStyle}>
            <div className="flex flex-col w-96">
                <h1 className="font-raleway font-bold leading-snug text-white text-6xl py-8 text-center w-full">
                    {title}
                </h1>
                <p className="font-dmsans text-xl text-white text-center">
                    {description}
                </p>
            </div>
        </div>
    )
}