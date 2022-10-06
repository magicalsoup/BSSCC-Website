export default function MailButton({backgroundColor, textColor, text, outline,}: {
    backgroundColor: string;
    textColor: string;
    text: string;
    outline: string;
}) {
    const style = `w-fit ${backgroundColor} ${textColor} ${outline} px-2 py-2 font-bold text-lg rounded`;
    
    return (
        <button className={style}>{text}</button>
    )
}

