import React from 'react'
import newArrivals1 from "../assets/images/newArrivals1.jpg"
import newArrivals2 from "../assets/images/newArrivals2.jpg"
import newArrivals3 from "../assets/images/newArrivals3.jpg"
import newArrivals4 from "../assets/images/newArrivals4.jpg"
import newArrivals5 from "../assets/images/newArrivals5.jpg"
import { AddButton } from "./AddButton"
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const NewArrivals = () => {
  return (
    <div className="py-6 px-10 font-light">
      <div>
        <div className="flex justify-between items-center text-left py-4">
          <h2 className="text-lg lg:text-2xl tracking-widest">NEW ARRIVALS</h2>
          <div className="flex items-center">
            <p>Shop New Arrivals</p>
            <button>
              <MdOutlineArrowRightAlt fontSize={22}/>
            </button>
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <img src={newArrivals1} alt="plant in a white pot on a wooden floor against a black background" />
            <AddButton />
            <p>$0.00</p>
          </div>
          <div>
            <img src={newArrivals2} alt="two plants on a tray against a white background" />
            <AddButton />
            <p>$0.00</p>
          </div>
          <div>
            <img src={newArrivals5} alt="a plant in an off-white pot" />
            <AddButton />
            <p>$0.00</p>
          </div>
          <div>
            <img src={newArrivals3} alt="a cactus in a brown pot" className="aspect-[2/3]" />
            <AddButton />
            <p>$0.00</p>
          </div>
          <div>
            <img src={newArrivals4} alt="roses in a white pot" />
            <AddButton />
            <p>$0.00</p>
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
