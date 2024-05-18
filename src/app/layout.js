import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Balanpy | Cuida a tu Mascota con Amor",
  description: "Balanpy, la mejor plataforma interactiva para el cuidado de tu mascota",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
