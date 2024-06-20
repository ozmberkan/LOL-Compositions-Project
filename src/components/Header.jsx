import React from "react";
import shirtVector from "../assets/T-ShirtVector.png";
import useMedia from "~/hooks/useMedia";

export default function Header() {
  const isMobile = useMedia(1024);

  if (isMobile) {
    return (
      <div className="w-2/3  flex justify-center items-center my-5 mx-auto ">
        <div className="flex justify-center items-center gap-x-2">
          <img src={shirtVector} className="w-5" />
          <span className="font-unbounded text-xl text-[#f1f1f1]">
            <b>LOL</b>
            Compositions
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[90%] mx-auto h-16 flex justify-start items-center ">
      <div className="flex justify-center items-center gap-x-2">
        <img src={shirtVector} className="w-7" />
        <span className="font-unbounded text-2xl text-[#f1f1f1]">
          <b>LOL </b>Compositions |
          <span className="text-xs text-[#666666]"> ozmberkan v1.0</span>
        </span>
      </div>
    </div>
  );
}
