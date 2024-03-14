import React from 'react'
import newArrivals1 from "../assets/images/newArrivals1.jpg"
import newArrivals2 from "../assets/images/newArrivals2.jpg"
import newArrivals3 from "../assets/images/newArrivals3.jpg"
import newArrivals4 from "../assets/images/newArrivals4.jpg"
import { AddButton } from './AddButton'
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const NewArrivals = () => {
  return (
    <div className="py-6 px-10">
      <div className="">
        <div className="flex justify-between items-center text-left tracking-widest py-4">
          <h2 className="">NEW ARRIVALS</h2>
          <button className="bg-white p-2 px-4 rounded-md">Shop New Arrivals<MdOutlineArrowRightAlt /></button>
        </div>
        <div className="flex">
          <div>
            <img src={newArrivals1} alt="" />
            <AddButton />
            <p className="text-white">$0.00</p>
          </div>
          <div>
            <img src={newArrivals2} alt="" />
            <AddButton />
            <p className="text-white">$0.00</p>
          </div>
          <div>
            <img src={newArrivals3} alt="" />
            <AddButton />
            <p className="text-white">$0.00</p>
          </div>
          <div>
            <img src={newArrivals4} alt="" />
            <AddButton />
            <p className="text-white">$0.00</p>
          </div>
          <div>
            <img src="" alt="" />
            <AddButton />
            <p className="text-white">$0.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}
