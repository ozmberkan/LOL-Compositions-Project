import React from "react";
import { FaSort } from "react-icons/fa";
import useMedia from "~/hooks/useMedia";

export default function Titles({ setSorting }) {
  const isMobile = useMedia(1024);

  if (isMobile) {
    return (
      <div className="w-full min-h-14 flex justify-center font-sourceSansPro items-center text-[14px] text-[#7c7c7c] ">
        <p className="h-full bg-red-500 w-full flex justify-start items-center mr-10 gap-x-2">
          <span>Title</span>
          <span
            className="cursor-pointer text-[rgb(255,57,0)]"
            onClick={() =>
              setSorting((prev) => ({
                criteria: "name",
                orderBy: prev.orderBy === "asc" ? "desc" : "asc",
              }))
            }
          >
            <FaSort size={20} />
          </span>
        </p>
        <p className="h-full w-full flex justify-center items-center">
          Champions
        </p>
        <p className="h-full w-full flex justify-center items-center">
          Gamestyles
        </p>
        <p className="h-full w-full flex justify-center items-center">
          Scaling
        </p>
        <p className="h-full w-full flex justify-center items-center gap-x-2">
          <span>Added Date</span>
          <span
            className="cursor-pointer text-[rgb(255,57,0)]"
            onClick={() =>
              setSorting((prev) => ({
                criteria: "added",
                orderBy: prev.orderBy === "asc" ? "desc" : "asc",
              }))
            }
          >
            <FaSort size={20} />
          </span>
        </p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-14 flex justify-between font-sourceSansPro items-center px-[70px] 0 text-[14px] text-[#7c7c7c] ">
      <p className="h-full w-full flex justify-start items-center mr-10 gap-x-2">
        <span>Title</span>
        <span
          className="cursor-pointer text-[rgb(255,57,0)]"
          onClick={() =>
            setSorting((prev) => ({
              criteria: "name",
              orderBy: prev.orderBy === "asc" ? "desc" : "asc",
            }))
          }
        >
          <FaSort size={20} />
        </span>
      </p>
      <p className="h-full w-full flex justify-center items-center">
        Champions
      </p>
      <p className="h-full w-full flex justify-center items-center">
        Gamestyles
      </p>
      <p className="h-full w-full flex justify-center items-center">Scaling</p>
      <p className="h-full w-full flex justify-center items-center gap-x-2">
        <span>Added Date</span>
        <span
          className="cursor-pointer text-[rgb(255,57,0)]"
          onClick={() =>
            setSorting((prev) => ({
              criteria: "added",
              orderBy: prev.orderBy === "asc" ? "desc" : "asc",
            }))
          }
        >
          <FaSort size={20} />
        </span>
      </p>
      <p className="h-full w-full flex justify-center items-center"></p>
    </div>
  );
}
