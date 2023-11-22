"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const cursor = document.querySelector(".cursor");
    const cursorDot = document.querySelector(".cursor__dot");

    const updateCursor = (e) => {
      gsap.to(".cursor", {
        duration: 1,
        x: e.pageX * 2 - 50 + "%",
        y: e.pageY * 2 - 50 + "%",
        ease: "power3.out",
      });
      cursorDot.style.top = e.pageY + "px";
      cursorDot.style.left = e.pageX + "px";
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("cursor__block");
      cursor.classList.add("cursor__none");
      cursorDot.classList.remove("cursor__block");
      cursorDot.classList.add("cursor__none");
    };

    const handleMouseOver = () => {
      cursor.classList.remove("cursor__none");
      cursor.classList.add("cursor__block");
      cursorDot.classList.remove("cursor__none");
      cursorDot.classList.add("cursor__block");
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousemove", updateCursor);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousemove", updateCursor);
    };
  }, []);

  return (
    <>
      <div>
        <div class="cursor cursor__none"></div>
        <div class="cursor__dot cursor__none"></div>
      </div>
    </>
  );
};

export default Cursor;
