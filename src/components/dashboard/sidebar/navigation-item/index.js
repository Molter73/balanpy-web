export default function NavigationItem({href, image, text}) {
    return (
        <a href={href} className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start focus:text-balanpy-800 focus:font-bold" >
            <img src={image.src} alt={image.alt} className="pr-1" />
            {text}
        </a>
    )
}
