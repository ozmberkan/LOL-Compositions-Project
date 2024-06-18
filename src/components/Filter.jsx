import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { GrPowerReset } from "react-icons/gr";

const Filter = ({ initialStyles, filterBox, resetBox }) => {
  return (
    <div className="w-[90%] h-20 mx-auto flex justify-between items-center">
      <div className="flex justify-center items-center">
        {initialStyles.map((style, index) => (
          <div
            key={index}
            className="bg-[#212121] p-2 rounded-full hover:bg-[#2c2c2c] transition-colors duration-200"
            data-tooltip-id="tooltipname"
            data-tooltip-content={`${style.name}`}
            onClick={() => filterBox(style.name)}
          >
            <img
              src={style.image}
              className="w-10 h-10 cursor-pointer"
              alt={style.name}
            />
          </div>
        ))}
      </div>
      <div
        onClick={resetBox}
        className="w-12 h-12 bg-[#212121] flex rounded-full cursor-pointer hover:bg-[#2c2c2c] transition-colors duration-300  justify-center items-center"
      >
        <GrPowerReset size={20} className="text-white" />
      </div>
      <Tooltip id="tooltipname" />
    </div>
  );
};

export default Filter;
