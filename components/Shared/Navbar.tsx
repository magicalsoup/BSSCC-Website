import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex fixed w-full justify-center bg-blue-gray-900 py-4 z-40 font-raleway">
            <div className="flex items-center w-[1024px] 2xl:w-[1280px]">
                <Link href="/">
                    <a className="pr-12 justify-self-start">
                        <img src="/Blob (white).png" className="w-16" alt="nani"/>
                    </a>
                </Link>
                <Link href="/about">
                    <a className="text-white font-bold px-12">
                        About
                    </a>
                </Link>
                <Link href="/blog">
                    <a className="text-white font-bold px-12">
                        Blog
                    </a>
                </Link>
                <Link href="/resources">
                    <a className="text-white font-bold px-12">
                        Resources
                    </a>
                </Link>
            </div>
        </div>
    )
}