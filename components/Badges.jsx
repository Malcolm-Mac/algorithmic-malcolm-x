import React from "react";

const Badges = () => {
  return (
    <div
      id="awwwards"
      className="hidden md:block absolute z-50 -translate-y-1/2 top-1/2 right-0 "
    >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-purple-600 rounded-md blur animate-pulse">
        </div>
      <a
        href="#"
        target="_blank"
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
  );
};

export default Badges;
