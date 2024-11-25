"use client";
import React, { Children } from "react";

type Props = {
  id: string;
  fill: string;
  children: any;
  handleMouseOver: any;
  handleMouseLeave: any;
  
};

export default function State({ id, fill, handleMouseOver, handleMouseLeave, children }: Props) {
  return (
    <>
      <g
        className="state"
        id={id}
        style={{ fill: fill, color: "red" }}
        onMouseEnter={(e) => handleMouseOver(e.clientX, e.clientY)}
        onMouseLeave={()=>handleMouseLeave(true)}
      >
        {...children}
      </g>
      <div className="bg-pink w-[300px] rounded p-4 h-48 text-black absolute z-10 left-10 top-10">
        <img
          src="https://www.google.com/imgres?q=square%20image&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8aYBRmw0VcY%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fm.youtube.com%2Fwatch%3Fv%3D8aYBRmw0VcY&docid=In_iE0598TR-JM&tbnid=LZKprU_GDGLGmM&vet=12ahUKEwii_oresqaJAxXbU0EAHZlCAgsQM3oECGAQAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwii_oresqaJAxXbU0EAHZlCAgsQM3oECGAQAA"
          alt=""
          className="rounded-full"
        />
      </div>
    </>
  );
}
