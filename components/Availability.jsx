import React from "react";

const Availability = () => {
  return (
    <div className="flex flex-col md:mb-2 lg:mb-0 mb-10">
      <div
        className="flex items-center gap-4 xl:gap-[20px] 2xl:gap-[30px] down"
      >
        <h3 className="uppercase xl:text-[26px] 2xl:text-[32px] font-[400] text-white">
          Open to work
        </h3>
        <div className="relative h-[28px] w-[28px]">
          <img
            src="/asterisk.svg"
            alt="asterisk"
            className="object-contain animate__spin"
          />
        </div>
      </div>
      <h4
        className="font-[200] text-white lg:ml-1 based-in"
      >
        Based in South Africa
      </h4>
    </div>
  );
};

export default Availability;
