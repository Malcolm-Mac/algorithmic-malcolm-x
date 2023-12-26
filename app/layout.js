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
  
  return (
    <html lang="en">
      <head>
        <title>Malcolm Motubatse</title>
        <meta name="description" content="Portfolio" />
      </head>

      <body
        className={`bg-black overflow-x-hidden no-scrollbar overflow-y-auto ${inter.className}`}
      >
        <Cursor />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
