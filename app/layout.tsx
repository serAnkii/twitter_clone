import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import Sidebar from "./Components/Sidebar";
import Rightsection from "./Components/Rightsection";
const inter = Inter({ subsets: ["latin"] });
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Twitter Clone",
  description: "Twitter But Better",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

   
    const headersList = headers();
    const domain = headersList.get('host') || "";
    const fullUrl = headersList.get('referer') || "";

    // const isLogin = fullUrl === /login`


  return (
    <html lang="en" >
      <Toaster position="bottom-center" richColors theme="dark" />

      <body className="relative h-screen w-screen overflow-hidden" >
        <div className="h-full w-[100vw] bg-black flex justify-around items-center">
          <div className="w-[80vw] h-screen flex ">
            <Sidebar />
            {children} 
            <Rightsection />
          </div>
        </div>
      </body>
    </html>
  );
}