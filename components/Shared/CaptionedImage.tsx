export default function CaptionedImage({src, alt, title}) {
    if(title) {
        return (
            <figure className="flex items-center flex-col">
                <img src={src} alt={alt}/>
                <figcaption>{title}</figcaption>
            </figure>
        )
    }
    else {
        return (
            <img src={src} alt={alt}/>
        )
    }
}