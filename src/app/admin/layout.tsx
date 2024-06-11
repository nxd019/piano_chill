import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import AdminHome from "./page";
import Footer from "@/components/footer";
import Header from "@/components/header";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
    <body className={inter.className} >
      <AdminHome/>
      {children}
      </body>
  </html>
  );
}
