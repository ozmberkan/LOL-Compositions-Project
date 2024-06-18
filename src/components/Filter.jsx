import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Filter = ({ gamestyles }) => {
  return (
    <div className="w-[90%] mt-2 mx-auto h-16 flex justify-start items-center mb-5">
      <div className="flex justify-center items-center  gap-x-1">

        {gamestyles.map((item) => (
          <div
            key={item.id}
            className="bg-[#212121] p-2 rounded-full hover:bg-[#2c2c2c] transition-colors duration-200"
            data-tooltip-id="tooltipname"
            data-tooltip-content={`${item.name}`}
          >
            <img
              src={item.image}
              className="w-10 h-10 cursor-pointer"
              alt={item.name}
            />
          </div>
        ))}
      </div>
      <Tooltip id="tooltipname" />
    </div>
  );
};

export default Filter;
