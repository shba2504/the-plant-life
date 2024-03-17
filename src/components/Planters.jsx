import React from 'react'
import planters1 from "../assets/images/planters1.jpg"
import planters2 from "../assets/images/planters2.jpg"
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const Planters = () => {
  return (
    <div className="py-2 px-10">
      <div className="flex justify-between text-left tracking-widest pt-4 pb-4">
        <h2 className="text-lg lg:text-2xl">PLANTERS</h2>
        <button className="pl-8 pr-8">Shop All Planters <MdOutlineArrowRightAlt /></button>
      </div>
      <div className="flex gap-2">
        <div>
          <img src={planters1} alt="plants in gold containers on a wooden table" />
        </div>
        <div>
          <img src={planters2} alt="three beige planters with two on a pedestal" />
        </div>
      </div>
    </div>
  )
}
