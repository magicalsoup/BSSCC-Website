import Polaroid from "../Shared/Polaroid";

export default function ExecutiveCard({ executive }) {
  return (
    // <div className="w-32 sm:w-48 md:w-52 h-52">
    //     <img src={executive.photo} className="object-scale-down"/>
    //     <div className="flex flex-col text-white text-center bg-zinc-900 py-4">
    //         <h1 className="font-raleway font-medium text-lg md:text-2xl">{executive.name}</h1>
    //         <p className="font-dmsans text-xs sm:text-sm md:text-md">{executive.role}</p>
    //     </div>
    // </div>
    <div className="flex flex-col bg-stone-200 w-32 h-44 sm:w-52 sm:h-56 md:w-64 md:h-64 lg:h-80 lg:w-64">
      <div className="flex flex-col items-center h-full gap-y-2 lg:gap-y-4 px-4 pt-4">
        <img
          className="h-24 sm:h-36 md:h-40 lg:h-52 w-full object-cover"
          src={executive.photo}
        />
        <div className="flex flex-col text-center">
            <h1 className="font-raleway font-medium text-sm md:text-lg lg:text-2xl">{executive.name}</h1>
            <p className="font-dmsans text-xs sm:text-sm md:text-md">{executive.role}</p>
        </div>
      </div>
    </div>
  );
}
