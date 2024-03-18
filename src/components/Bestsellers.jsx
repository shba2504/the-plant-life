import React from 'react'
import bestsellers1 from "../assets/images/bestsellers1.jpg"
import bestsellers2 from "../assets/images/bestsellers2.jpg"
import bestsellers3 from "../assets/images/bestsellers3.jpg"
import bestsellers4 from "../assets/images/bestsellers4.jpg"
import bestsellers5 from "../assets/images/bestsellers5.jpg"
import { AddButton } from "./AddButton"
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const Bestsellers = () => {
  return (
    <div className="py-2 px-10 font-light">
      <div className="mt-4">
        <div className="flex justify-between text-left py-4">
          <h2 className="text-lg lg:text-2xl tracking-widest">BESTSELLERS</h2>
          <div className="flex items-center">
            <p>Shop Bestsellers </p>
            <button><MdOutlineArrowRightAlt fontSize={22}/></button>
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <img src={bestsellers1} alt="" />
            <AddButton />
            <p>$0.00</p>
          </div>
          <div>
            <img src={bestsellers2} alt="" />
            <AddButton />
            <p>$0.00</p>
          </div>
          <div>
            <img src={bestsellers5} alt="" />
            <AddButton />
            <p>$0.00</p>
          </div>
          <div>
            <img src={bestsellers4} alt="" />
            <AddButton />
            <p>$0.00</p>
          </div>
          <div>
            <img src={bestsellers3} alt="" />
            <AddButton />
            <p>$0.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}
