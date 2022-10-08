import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex fixed w-full items-center bg-blue-gray-900 pl-12 py-4 z-40">
            <Link href="/">
                <a className="px-12">
                    <img src="..\Blob (white).png" className="w-16"></img>
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
    )
}