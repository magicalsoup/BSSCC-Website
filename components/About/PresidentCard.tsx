import { useCallback, useEffect, useState } from "react";
import Polaroid from "../Shared/Polaroid";
export default function PresidentCard({
  name,
  photoSrc,
  description,
  flexDirection,
}: {
  name: string;
  photoSrc: string;
  description: string;
  flexDirection: string;
}) {
  const useMediaQuery = (width: number) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);

    useEffect(() => {
      if (typeof window !== "undefined") {
        const media = window.matchMedia(`(max-width:${width}px)`);
        media.addListener(updateTarget);

        if (media.matches) {
          setTargetReached(true);
        }

        return () => media.removeListener(updateTarget);
      }
    }, []);

    return targetReached;
  };

  const matches = useMediaQuery(640);

  const mainDivStyle = `flex ${flexDirection} justify-between w-full`;

  if (!matches) {
    return (
      <div className={mainDivStyle}>
        <Polaroid imgSrc={photoSrc} name={name} />
        <div className="flex flex-col w-1/2">
          <h1 className="text-3xl md:text-4xl text-pink-400 py-4 font-raleway">
            President
          </h1>
          <p className="text-lg text-white font-dmsans">
            {description}
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center">
        <Polaroid imgSrc={photoSrc} name={name} />
        <h1 className="text-xl text-pink-400 py-4 font-raleway">
            President
        </h1>
        <p className="text-white font-dmsans text-center px-4">
            {description}
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
        </p>
      </div>
    );
  }
}
