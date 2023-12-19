"use client";
import Cursor from "@/components/Cursor";
import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/system";

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
        <meta name='description' content='Portfolio' />
      </head>
      <body
        className={`bg-black cursor-none overflow-x-hidden no-scrollbar overflow-y-auto ${inter.className}`}
      >
        <NextUIProvider>
          <Cursor />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
