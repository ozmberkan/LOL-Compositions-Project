import React, { useState, useEffect } from "react";
import Box from "./Box";
import Titles from "./Titles";
import useMedia from "~/hooks/useMedia";

const Main = ({ datas, setDatas }) => {
  const [sorting, setSorting] = useState({});
  const isMobile = useMedia(1024);

  useEffect(() => {
    if (sorting.criteria) {
      const sortedData = [...datas].sort((a, b) => {
        if (a[sorting.criteria] < b[sorting.criteria])
          return sorting.orderBy === "asc" ? -1 : 1;
        if (a[sorting.criteria] > b[sorting.criteria])
          return sorting.orderBy === "asc" ? 1 : -1;
        return 0;
      });
      setDatas(sortedData);
    }
  }, [sorting, datas, setDatas]);

  const deleteBox = (id) => {
    const updatedBox = datas.filter((data) => data.id !== id);
    setDatas(updatedBox);
  };

  if (isMobile) {
    return (
      <div className="w-[90%] mx-auto  outline transition-all duration-700 outline-offset-2 outline-[#1C1C1C]/50 bg-[#1C1C1C] mt-3 rounded-2xl flex flex-col justify-start items-center gap-y-5 px-5">
        <div className="w-full flex-1 py-5 overflow-auto gap-y-5 flex flex-col">
          {datas.map((comp) => (
            <Box key={comp.id} comp={comp} deleteBox={deleteBox} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-[90%] mx-auto h-[700px] outline transition-all duration-700 outline-offset-2  outline-[#1C1C1C]/50 bg-[#1C1C1C] mt-3 rounded-2xl flex flex-col justify-start items-center gap-y-5 px-5">
      <Titles setSorting={setSorting} />
      <div className="w-full flex-1 py-4 overflow-auto gap-y-3 flex flex-col px-12">
        {datas.map((comp) => (
          <Box key={comp.id} comp={comp} deleteBox={deleteBox} />
        ))}
      </div>
    </div>
  );
};

export default Main;
