export default function ActivityButton({text, image, alt_text}) {
    return (
        <div className="flex flex-col items-center justify-center align-center p-3">
            <img src={image} alt={alt_text} height="64" width="64" className="border rounded-xl border-balanpy-800 bg-balanpy-50 p-3" />
            <span className="text-black">{text}</span>
        </div>
    )
}
