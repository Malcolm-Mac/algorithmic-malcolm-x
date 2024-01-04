"use client";
import React, { useLayoutEffect } from "react";
import { Tween } from "gsap/gsap-core";

const Header = () => {
  useLayoutEffect(() => {
    return () => {
      Tween.from("h1", 1, {
        opacity: 0,
        x: -20,
        ease: "power3.out",
      });
    };
  }, []);
  return (
    <header className="px-[30px] md:px-[60px] py-[30px] flex items-center justify-between absolute top-0 left-0 right-0">
      <h1 className="text-[25px] xl:text-[32px] 2xl:text-[40px] font-[340] text-white text-heading">
        Malcolm Motubatse
      </h1>
    </header>
  );
};

export default Header;
