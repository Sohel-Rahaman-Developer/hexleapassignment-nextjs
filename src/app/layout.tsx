
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainContextProvider, { MainContext } from "./Context/MainContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hexleap",
  description: "Assignment by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainContextProvider>
          {children}
        </MainContextProvider>
      
      </body>
    </html>
  );
}
