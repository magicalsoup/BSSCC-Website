import Link from "next/link";
export default function MailButton({text, linkTo, tailwindCSS}: {
    text: string;
    linkTo: string;
    tailwindCSS: string;
}) {
    const style = `w-fit ${tailwindCSS} font-bold text-lg rounded font-raleway`;
    
    return (
        <Link href={linkTo}>
            <button className={style}>{text}</button>
        </Link>
    )
}

