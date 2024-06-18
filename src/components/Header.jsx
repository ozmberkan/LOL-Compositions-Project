import React from "react";
import shirtVector from "../assets/T-ShirtVector.png";

export default function Header() {
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
