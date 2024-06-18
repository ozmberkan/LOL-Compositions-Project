import React from "react";

export default function Titles() {
  return (
    <div className="w-full min-h-14 flex justify-between font-sourceSansPro items-center px-[70px] 0 text-[14px] text-[#7c7c7c] ">
      <span className=" h-full w-full flex justify-start items-center mr-12">
        Name
      </span>
      <span className=" h-full w-full flex justify-center items-center">
        Champions
      </span>
      <span className=" h-full w-full flex justify-center items-center">
        Gamestyles
      </span>
      <span className=" h-full w-full flex justify-center items-center">
        Scaling
      </span>
      <span className=" h-full w-full flex justify-center items-center">
        Added Date
      </span>
      <span className=" h-full w-full flex justify-center items-center"></span>
    </div>
  );
}
