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

    // to get the url   
    // const headersList = headers();
    // const domain = headersList.get('host') || "";
    // const fullUrl = headersList.get('referer') || "";



  return (
    <html lang="en" >
      <Toaster position="bottom-center" richColors theme="dark" />

      <body className="relative h-screen w-screen overflow-hidden bg-black">
            <Sidebar />
            {children} 
            <Rightsection />
      </body>
    </html>
  );
}