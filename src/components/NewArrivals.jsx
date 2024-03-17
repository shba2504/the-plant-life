import React from 'react'
import newArrivals1 from "../assets/images/newArrivals1.jpg"
import newArrivals2 from "../assets/images/newArrivals2.jpg"
import newArrivals3 from "../assets/images/newArrivals3.jpg"
import newArrivals4 from "../assets/images/newArrivals4.jpg"
import { AddButton } from "./AddButton"
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const NewArrivals = () => {
  return (
    <div className="py-6 px-10">
      <div className="">
        <div className="flex justify-between items-center text-left tracking-widest">
          <h2 className="text-lg lg:text-2xl">NEW ARRIVALS</h2>
          <button className="">Shop New Arrivals</button>
          <MdOutlineArrowRightAlt />
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
        <div className="absolute top-[115%] -translate-x-0 -translate-y-[-50%] left-5 border cursor-pointer opacity-50">
          <IoIosArrowBack size={24}/>
        </div>
        <div className="absolute top-[115%] -translate-x-0 -translate-y-[-50%] right-5 border cursor-pointer opacity-50">
          <IoIosArrowForward size={24}/>
        </div>
      </div>
    </div>
  )
}
