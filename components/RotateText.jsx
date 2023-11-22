"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const RotatingText = () => {
  const text = "Scroll Down - Scroll Down";

  return (
    <div className="circular__text__container">
      <div className="logo">
        <img
          src="/asterisk.svg"
          alt="asterisk"
          className="object-contain animate__spin__two"
        />
      </div>
      <div className="rotating___text">
        {text.split("").map((letter, index) => (
          <p
            key={index}
            className="text-white uppercase text-2xl"
            style={{ transform: `rotate(${index * 13.5}deg)` }}
          >
            {letter}
          </p>
        ))}
      </div>
    </div>
  );
};

export default RotatingText;
