"use client";
import React,{useState} from "react";
import CustomModal from "./ui/CustomModal";

const Badges = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleIsOpen = () => {
    setIsOpen(true);
  };

  const handleOnClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div
        id="awwwards"
        className="hidden md:block absolute z-50 -translate-y-1/2 top-1/2 right-0"
        onClick={() => handleIsOpen()}
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-purple-600 rounded-md blur animate-pulse"></div>
        <a
          className="relative px-0 py-20 shadow-2xl rounded-md bg-white flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center absolute top-2 h-[28px] w-[28px]">
            <img src="/award.png" alt="awards" className="object-contain" />
          </div>
          <div className="-rotate-90 -mb-7 mt-10">
            <p className="font-[500]">Honors</p>
          </div>
        </a>
      </div>
      <CustomModal isOpen={isOpen} onClose={handleOnClose} />
    </>
  );
};

export default Badges;
