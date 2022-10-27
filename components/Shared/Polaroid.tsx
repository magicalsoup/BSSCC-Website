

export default function Polaroid(props) {
  return (
    <div className="bg-stone-200 w-52 h-52 md:w-64 md:h-64 lg:w-96 lg:h-96">
      <div className="flex flex-col items-center px-4 pt-4">
        <img
          className="h-40 md:h-52 lg:h-72 w-full object-cover"
          src={props.imgSrc}
        />
        <h1 className="text-center lg:p-6 text-lg lg:text-2xl font-raleway">
          {props.name}
        </h1>
      </div>
    </div>
  );
}