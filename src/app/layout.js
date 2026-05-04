import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import 'animate.css';
import { ToastContainer } from "react-toastify";
const OutFitFont = Outfit({
  subsets: ["latin"],
});


export const metadata = {
  title: "SunCart",
  description: "A modern summer eCommerce platform where users can explore and purchase seasonal products.",
};

export default function RootLayout({ children }) {
  return (
    <html
    data-theme= 'light'
      lang="en"
      className={`${OutFitFont.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        <main className="w-full mx-auto">{children}</main>
        <Footer/>
        <ToastContainer position="top-center"/>
        </body>
    </html>
  );
}
