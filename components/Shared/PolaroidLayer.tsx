import Polaroid from "./Polaroid";
import { useCallback, useEffect, useState } from "react";

export default function PolaroidLayer(props) {
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

  const matches = useMediaQuery(props.responseWidth);
  if (!matches) {
    return (
      <div className="relative flex items-center w-1/2">
        <div className="absolute right-0 origin-center -rotate-12">
          <Polaroid imgSrc={props.imgSrc} />
        </div>
        <div className="absolute right-0">
          <Polaroid imgSrc={props.imgSrc} />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
