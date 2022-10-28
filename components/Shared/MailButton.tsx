import Link from "next/link";
export default function MailButton({
  text,
  linkTo,
  tailwindCSS,
}: {
  text: string;
  linkTo: string;
  tailwindCSS: string;
}) {
  const style = `w-fit transition-all duration-200 ease-in ${tailwindCSS} font-bold text-xs sm:text-sm lg:text-lg rounded font-raleway`;

  return (
    <Link href={linkTo}>
      <button className={style}>{text}</button>
    </Link>
  );
}
