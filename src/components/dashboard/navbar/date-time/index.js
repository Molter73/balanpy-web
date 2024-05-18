import {months} from "@/constants/dashboard"

export default function CurrentDateTime() {
    let d = new Date()
    let time = `${d.getHours()}:${d.getMinutes()}`
    let date = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`

    return (
                <div className="text-balanpy-800 text-sm">
                    {`${time} ${date}`}
                </div>
    )
}
