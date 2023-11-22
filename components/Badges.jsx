import React from "react";

const Badges = () => {
  return (
    <div
      id="awwwards"
      className="absolute z-50 -translate-y-1/2 top-1/2 right-0"
    >
      <a
        href="#"
        target="_blank"
        className="relative px-0 py-20 bg-white flex flex-col items-center justify-center"
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
