"use client"
import { useState } from "react"
import Container from "@/components/dashboard/container"
import DashboardLayout from "@/components/dashboard/layout"
import { vetCenters } from "@/constants/vet";
export default function Dashboard() {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10
    const totalPages = Math.ceil(vetCenters.length / itemsPerPage)

    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1)
      }
    }

    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1)
      }
    }

    const displayedCenters = vetCenters.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    )

    return (
      <DashboardLayout className="h-full bg-balanpy-50">
        <div className="text-black p-6 bg-balanpy-50 grid gap-4 grid-cols-6">
          <Container styles="col-span-6 p-4">
            <table className="min-w-full">
              <thead className="bg-gray-400 text-white rounded-full">
                <tr>
                  <th className="px-6 py-3 text-center text-md font-medium text-white uppercase tracking-wider rounded-l-full">
                    Centro Veterinario
                  </th>
                  <th className="px-6 py-3 text-center text-md font-medium text-white uppercase tracking-wider">
                    Teléfono
                  </th>
                  <th className="px-6 py-3 text-center text-md font-medium text-white uppercase tracking-wider">
                    Población
                  </th>
                  <th className="px-6 py-3 text-center text-md font-medium text-white uppercase tracking-wider">
                    Ciudad
                  </th>
                  <th className="px-6 py-3 text-center text-md font-medium text-white uppercase tracking-wider">
                    Distancia(km)
                  </th>
                  <th className="px-6 py-3 text-center text-md font-medium text-white uppercase tracking-wider rounded-r-full">
                    Contacto
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {displayedCenters.map((center, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            src="/dashboard/centro-veterinario.svg"
                            alt="centro veterinario"
                            className="h-10 w-10 rounded-full"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {center.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {center.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 text-center">
                        {center.location}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 text-center">
                        {center.city}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 text-center">
                        {center.distance}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 flex items-center space-x-2">
                        <img
                          src="/vet/phone-vet.svg"
                          alt="Teléfono Veterinario"
                          className="h-8 w-8"
                        />
                        <img
                          src="/vet/whatsapp-vet.svg"
                          alt="WhatsApp Veterinario"
                          className="h-8 w-8"
                        />
                        <img
                          src="/vet/mail-vet.svg"
                          alt="Correo Electrónico Veterinario"
                          className="h-8 w-8"
                        />
                        <img
                          src="/vet/calendar-vet.svg"
                          alt="Calendario Veterinario"
                          className="h-8 w-8"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between items-center mt-4">
              <span className="font-regular text-md">
                Centros Veterinarios: {(currentPage - 1) * itemsPerPage + 1} -{" "}
                {Math.min(currentPage * itemsPerPage, vetCenters.length)} de{" "}
                {vetCenters.length}
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="bg-white text-gray-700 px-[10px] py-1 rounded-md disabled:opacity-50 border-[1px] border-gray-300"
                >
                  &lt;
                </button>
                {[...Array(totalPages)].map((_, pageIndex) => (
                  <button
                    key={pageIndex}
                    onClick={() => setCurrentPage(pageIndex + 1)}
                    className={`px-[10px] py-1 rounded-md ${
                      pageIndex + 1 === currentPage
                        ? "bg-balanpy-800 text-white border-[1px] border-balanpy-800"
                        : "bg-white text-gray-700 border-gray-300 border-[1px]"
                    }`}
                  >
                    {pageIndex + 1}
                  </button>
                ))}
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="bg-white text-gray-700 px-[10px] py-1 rounded-md disabled:opacity-50 border-[1px] border-gray-300"
                >
                  &gt;
                </button>
              </div>
            </div>
          </Container>
        </div>
      </DashboardLayout>
    );
}