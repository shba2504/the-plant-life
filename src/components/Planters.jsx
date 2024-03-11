import React from 'react'
import planters1 from "../assets/images/planters1.jpg"
import planters2 from "../assets/images/planters2.jpg"
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const Planters = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between text-left tracking-widest pt-4 pb-4">
        <h2>PLANTERS</h2>
        <button className="bg-white pl-8 pr-8">Shop All Planters <MdOutlineArrowRightAlt /></button>
      </div>
      <div className="flex gap-2">
        <div>
          <img src={planters1} alt="" />
        </div>
        <div>
          <img src={planters2} alt="" />
        </div>
      </div>
    </div>
  )
}
