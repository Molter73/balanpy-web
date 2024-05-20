import StatusBar from "@/components/dashboard/statusbar"

export default function PetInfo() {
    return (
        <div className="flex flex-col col-span-1 border-[3px] rounded-[20px] border-balanpy-800 align-center justify-center items-center p-4 text-black font-poppins font-regular">
            <img src="/dashboard/pet.png" alt="Your pet" className="rounded-full mb-2" />
            <StatusBar name="Comida" bg_color="bg-balanpy-600" perc="75%" />
            <StatusBar name="Paseos" bg_color="bg-balanpy-600" perc="95%" />
            <StatusBar name="Higiene" bg_color="bg-yellow-500" perc="50%" />
            <StatusBar name="Vacunacion" bg_color="bg-red-700" perc="15%" />
        </div>
    )
}
