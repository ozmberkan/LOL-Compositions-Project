import React, { useState } from "react";
import DetailButton from "../assets/DetailVector.png";
import DetailHoverButton from "../assets/DetailVectorHover.png";
import { LuMinus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function Box({ comp, deleteBox }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsShowing(true)}
      onMouseLeave={() => setIsShowing(false)}
      className="w-full px-[50px] min-h-[100px] relative cursor-pointer transition-colors duration-500 flex justify-between items-center border rounded-full border-[#2d2d2d] hover:bg-[#292929] text-[#7c7c7c]"
    >
      {isShowing && (
        <div
          onClick={() => deleteBox(comp.id)}
          className="absolute -right-3 rounded-full w-8 h-8 border border-[#464646] hover:bg-[#141414] flex justify-center items-center"
        >
          <LuMinus />
        </div>
      )}
      <div className="w-full h-1/2 font-unbounded text-[#f1f1f1] border-[#2d2d2d]  flex justify-start items-center border-r mr-12">
        {comp.name}
      </div>
      <div className="w-full h-full  flex justify-center items-center -space-x-3 ">
        {comp.images.map((image, index) => (
          <img
            key={index}
            src={image.image}
            alt={image.name}
            className="w-14 rounded-full border-[4px] border-[#1C1C1C]"
          />
        ))}
      </div>
      <div className="w-full h-full  flex justify-center items-center ">
        <div className="flex justify-center font-sourceSansPro items-center gap-x-2 w-1/2 ">
          <img
            src={comp.gamestyle.image}
            alt={comp.gamestyle.type}
            className="object-cover"
          />
          <span className="h-10 flex justify-center items-center">
            {comp.gamestyle.type}
          </span>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center gap-x-3">
        {comp.scaling.map((scale) => (
          <div
            key={scale.id}
            style={{ backgroundColor: scale.color_code }}
            className="w-[16px] h-[4px] rounded-full"
          ></div>
        ))}
      </div>
      <div className="w-full h-full font-sourceSansPro  flex justify-center items-center">
        {comp.added}
      </div>
      <div className="w-full h-full  flex justify-center items-center ">
        <button
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={() => setIsOpen(true)}
          className="p-3 rounded-full border border-[#2d2d2d] ml-auto cursor-pointer hover:transition-all duration-700 hover:duration-700 outline outline-offset-2 outline-transparent hover:outline-[#ff6d00]/20 hover:shadow-[0_0px_30px_rgba(255,_57,_0)] bg-gradient-to-t hover:from-[rgb(255,57,0)] hover:to-[#ff6d00]"
        >
          {isHover ? (
            <img src={DetailHoverButton} alt="HoverDetail" />
          ) : (
            <img src={DetailButton} className="hover:text-white" alt="Detail" />
          )}
        </button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <div className="fixed inset-0  flex w-screen items-center justify-center p-4">
            <DialogPanel className="w-[700px] space-y-4 rounded-xl transition-all duration-700  outline outline-offset-2 outline-[#ff6d00]/20 shadow-[0_0px_50px_rgba(255,_57,_0)] bg-gradient-to-t to-[#ff3900] from-[#141414] text-[#f1f1f1] p-12">
              <div className="w-full flex justify-end items-center">
                <div className="p-2 rounded-full hover:bg-[#202020] transition-colors duration-300">
                  <IoMdClose
                    onClick={() => setIsOpen(false)}
                    className="text-3xl rounded-full w-6 h-6 cursor-pointer"
                  />
                </div>
              </div>
              <DialogTitle className="font-bold w-full text-4xl px-3 font-unbounded flex justify-center pb-3 items-center">
                {comp.name}
              </DialogTitle>
              <Description className="flex flex-col gap-y-5 justify-center items-center">
                <div className="flex w-full h-20 items-center justify-center -space-x-5  rounded-xl px-3 py-2">
                  {comp.images.map((image, index) => (
                    <img
                      key={index}
                      src={image.image}
                      alt={image.name}
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={`${image.name}`}
                      className="w-[90px] rounded-full "
                    />
                  ))}
                  <Tooltip id="my-tooltip" />
                </div>
                <div className="flex w-full h-20 items-center gap-x-2 rounded-xl justify-center">
                  {comp.scaling.map((scale) => (
                    <div
                      key={scale.id}
                      style={{ backgroundColor: scale.color_code }}
                      className="w-[50px] h-[10px] rounded-full"
                    ></div>
                  ))}
                </div>
              </Description>
              <div className="h-14  rounded-xl flex  justify-center items-center px-3 py-2">
                <p className="font-sourceSansPro font-semibold text-2xl text-[#f1f1f1] flex justify-center items-center gap-x-2">
                  <img src={comp.gamestyle.image} alt="" className="" />
                  <span className="font-unbounded">{comp.gamestyle.type}</span>
                </p>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
