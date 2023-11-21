"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;

    //gsap.set(cursor, { transformOrigin: "50% 50%" }); // Set transform origin for smooth rotation

    const updateCursor = (event) => {
      const { clientX: mouseX, clientY: mouseY } = event;

      gsap.to(cursor, {
        duration: 0.2,
        x: mouseX,
        y: mouseY,
        ease: "power2.out",
      });
      //gsap.to(dot, { duration: 0.2, x: mouseX, y: mouseY, ease: "power2.out" });
    };

    

    const handleWindowBlur = () => {
        setCursorVisible(false);
      };
  
      const handleWindowFocus = () => {
        if (!cursorVisible) {
          setCursorVisible(true);
        }
      };

    const handleMouseRest = () => {
      const rect = cursor.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      gsap.to(dot, {
        duration: 0.3,
        x: centerX,
        y: centerY,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", updateCursor);
    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("focus", handleWindowFocus);
    window.addEventListener("mouseleave", handleMouseRest);

    return () => {
      document.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("focus", handleWindowFocus);
      window.removeEventListener("mouseleave", handleMouseRest);
    };
  }, [cursorVisible]);

  return (
    <div ref={cursorRef} className={`custom__cursor ${cursorVisible ? 'visible' : ''}`}>
      <div ref={dotRef} className="cursor__dot"></div>
    </div>
  );
};

export default Cursor;
