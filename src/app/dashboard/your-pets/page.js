import DashboardLayout from "@/components/dashboard/layout";
import YourPets from "@/components/dashboard/pets-info";
import { fieldsYourPets } from "@/constants/form";

export default function Dashboard() {
    return (
      <DashboardLayout className="h-full bg-balanpy-50">
        <div className="justify-center items-center p-6 bg-balanpy-50 space-y-6">
                {fieldsYourPets.map((pet, index) => (
                  <YourPets key={index} pet={pet}/>
                ))}
        </div>
      </DashboardLayout>
    );
  }
