"use client"
import { usePathname } from "next/navigation"

export default function NavigationItem({href, image, text}) {
  const currUrl = usePathname()
  const textStyle = currUrl.endsWith(href) ? "text-balanpy-800 font-bold" : ""
  return (
    <a href={href} className={`flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start ${textStyle}`} >
      <img src={image.src} alt={image.alt} className="pr-4" />
      {text}
    </a>
  )
}
