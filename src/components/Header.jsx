import React from "react";
import shirtVector from "../assets/T-ShirtVector.png";

export default function Header() {
  return (
    <div className="w-full h-16 flex justify-center items-center ">
      <div className="flex justify-center items-center gap-x-2">
        <img src={shirtVector} className="w-7" />
        <span className="font-unbounded text-xl text-[#f1f1f1]">
          <b>Team </b>Compositions
        </span>
      </div>
    </div>
  );
}
