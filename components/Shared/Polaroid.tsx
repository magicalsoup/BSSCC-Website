import { useEffect, useState } from "react";

export default function Polaroid(props) {
  const [width, setWidth] = useState(1280);

  useEffect(() => {
    function handleWindowResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const min_size = 640; // mobile size
  if (width > min_size) {
    return (
      <div className="bg-white w-64 h-64 lg:w-96 lg:h-96">
        <div className="flex flex-col items-center px-4 pt-4">
          <img
            className="h-52 lg:h-72 w-full object-cover"
            src={props.imgSrc}
          />
          <h1 className="text-center p-6 text-2xl font-raleway">
            {props.name}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
