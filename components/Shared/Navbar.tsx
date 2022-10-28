import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Hamburger from "./Hamburger";
export default function Navbar() {
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
  const match = useMediaQuery(640);

  const [navbarBackground, setNavbarBackground] = useState("bg-blue-gray-900");
  useEffect(() => {
    function setBackground() {
      if (typeof window !== "undefined") {
        if (window.scrollY > 100) {
          setNavbarBackground("bg-blue-gray-600");
        } else {
          setNavbarBackground("bg-blue-gray-900");
        }
      }
    }

    window.addEventListener("scroll", setBackground);

    return () => window.removeEventListener("scroll", setBackground);
  }, []);

  if (match) {
    return (
      <div>
        <div
          className={`flex fixed w-full justify-center ${navbarBackground} py-4 z-40 font-raleway"`}
        >
          <div className="flex justify-between w-full px-4">
            <div className="">
              <Link href="/">
                <a>
                  <img src="/Blob (white).png" className="w-16" alt="" />
                </a>
              </Link>
            </div>
            <Hamburger />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`flex fixed w-full justify-center ${navbarBackground} pt-3 pb-2 z-40 font-raleway`}
      >
        <div className="flex justify-center w-full">
          <div className="flex w-full items-center 2xl:w-[1280px] gap-x-16">
            <div className="pl-12 xl:pl-32 2xl:pl-0">
              <Link href="/">
                <a>
                  <img src="/Blob (white).png" className="w-16" alt="" />
                </a>
              </Link>
            </div>
            <div>
              <Link href="/about">
                <a className="text-white font-bold px-12">About</a>
              </Link>
              <Link href="/blog">
                <a className="text-white font-bold px-12">Blog</a>
              </Link>
              <Link href="/resources">
                <a className="text-white font-bold px-12">Resources</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
