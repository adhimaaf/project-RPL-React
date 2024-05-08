import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav/NavBar";
import Jumbotron from "@/components/contents/Jumbotron";
import CompanyProfile from "@/components/contents/CompanyProfile";
import ServicesList from "@/components/contents/ServicesList";
import Testimonies from "@/components/contents/Testimonies";
import Footer from "@/components/nav/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="overflow-x-hidden">
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
