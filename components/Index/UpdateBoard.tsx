import { useCallback, useEffect, useState } from "react";
import BoardItem from "./BoardItem";
export default function UpdateBoard({ allPostsData }) {
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

  const mobile = useMediaQuery(640);

  let total_cards = 6; 

  if (mobile) {
    total_cards = 3;
  } 

  return (
    <div className="bg-white/10 p-2 lg:p-8 xl:p-12 rounded-xl">
      <div className="grid justify-around grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3">
        {allPostsData.slice(0, total_cards).map((post, index) => (
          <BoardItem
            key={index}
            id={post.id}
            title={post.frontMatter.title}
            authors={post.frontMatter.authors}
            blurb={post.frontMatter.blurb}
            path={post.path}
          />
        ))}
      </div>
    </div>
  );
}
