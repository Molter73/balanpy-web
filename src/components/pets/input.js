export default function Input({ text, placeholder }) {
    return <label className="text-black flex flex-col p-5 text-xl">{text}
        <input placeholder={placeholder} className="p-5 text-xs text-zinc-700 font-medium"></input>
    </label>

}
