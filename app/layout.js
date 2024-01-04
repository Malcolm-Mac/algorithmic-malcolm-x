"use client";
import "./globals.css";
import Cursor from "@/components/Cursor";
import localFont from "next/font/local";
import { ScrollShadow } from "@nextui-org/react";
import { Providers } from "./providers";
import React, { useEffect, useState } from "react";

const inter = localFont({ src: "../fonts/Montserrat-VariableFont_wght.ttf" });

/* export const metadata = {
  title: "Algorithmic Malcolm X",
  description: "Portfolio",
}; */

export default function RootLayout({ children }) {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
   
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <html lang="en">
      <head>
        <title>Malcolm Motubatse</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body
        className={`bg-black ${inter.className} ${isMobile ? "cursor-none" : "overflow-x-hidden no-scrollbar overflow-y-auto"}`}
      >
        {!isMobile && <Cursor />}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
