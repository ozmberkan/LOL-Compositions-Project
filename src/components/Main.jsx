import React from "react";
import Box from "./Box";
import Titles from "./Titles";

const Main = ({ datas, setDatas }) => {
  
  const deleteBox = (id) => {
    const updatedBox = datas.filter((data) => data.id !== id);
    setDatas(updatedBox);
  };

  return (
    <div className="w-[90%] mx-auto h-[700px] bg-[#1C1C1C] mt-3 rounded-2xl flex flex-col justify-start items-center gap-y-5 px-16">
      <Titles />
      {datas.map((comp) => (
        <Box key={comp.id} comp={comp} deleteBox={deleteBox} />
      ))}
    </div>
  );
};

export default Main;
