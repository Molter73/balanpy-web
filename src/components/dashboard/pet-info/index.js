import StatusBar from "@/components/dashboard/statusbar"

export default function PetInfo({ image, status }) {
  return (
    <div className="flex flex-col col-span-1 border-[3px] rounded-[20px] border-balanpy-800 align-center justify-center items-center p-4 text-black font-regular">
      <img src={image.src} alt={image.alt} className="rounded-full mb-2" />
      {status.map((stat, i) => {
        let color = "bg-balanpy-600"
        if (stat.value <= 25) {
          color = "bg-red-700"
        } else if (stat.value <= 50) {
          color = "bg-yellow-500"
        }

        return <StatusBar key={i} name={stat.name} bg_color={color} perc={`${stat.value}%`} />
      })}
    </div>
  )
}
