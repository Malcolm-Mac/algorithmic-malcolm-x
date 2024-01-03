import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  
  useLayoutEffect(() => {
    let cursor = document.querySelector('.cursor');
    let cursorScale = document.querySelectorAll('.cursor-scale');
    let mouseX = 0;
    let mouseY = 0;
    let isMoving = false;

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        if (isMoving) {
          gsap.set(cursor, {
            css: {
              left: mouseX,
              top: mouseY,
            },
          });
        }
      },
    });

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMoving = true;

      clearTimeout(recenterTimer);
      recenterTimer = setTimeout(() => {
        isMoving = false;
      }, 500);
    };

    let recenterTimer;

    window.addEventListener('mousemove', handleMouseMove);

    cursorScale.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        cursor.classList.add('grow');
        if (link.classList.contains('small')) {
          cursor.classList.remove('grow');
          cursor.classList.add('grow-small');
        }
      });

      link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
      });
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cursorScale.forEach((link) => {
        link.removeEventListener('mouseenter', () => {});
        link.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <React.Fragment>
      <div className="cursor"></div>
    </React.Fragment>
  );
};

export default Cursor;
