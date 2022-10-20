import Polaroid from "../Shared/Polaroid";
export default function PresidentCard({name, photoSrc, description, flexDirection} : {
    name: string;
    photoSrc: string;
    description: string;
    flexDirection: string;
}) {

    const mainDivStyle = `flex ${flexDirection} justify-between w-full`

    return (
        <div className={mainDivStyle}>
            <div className="w-96">
                <Polaroid 
                imgSrc={photoSrc}
                name={name}
                />
            </div>

            <div className="flex flex-col w-1/2">
                <h1 className="text-4xl text-pink-400 py-4 font-raleway">
                    President
                </h1>
                <p className="text-lg text-white font-dmsans">
                    {description}
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. 
                </p>
            </div>
        </div>
    )
}