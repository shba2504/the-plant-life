import React from 'react'
import bestsellers1 from "../assets/images/bestsellers1.jpg"
import bestsellers2 from "../assets/images/bestsellers2.jpg"
import bestsellers3 from "../assets/images/bestsellers3.jpg"
import bestsellers4 from "../assets/images/bestsellers4.jpg"
import { AddButton } from "./AddButton"
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const Bestsellers = () => {
  return (
    <div className="py-2 px-10">
      <div className="mt-4">
        <div className="flex justify-between text-left">
          <h2 className="text-lg lg:text-2xl">BESTSELLERS</h2>
          <button className="p-2 pl-8 pr-8 rounded-md">Shop Bestsellers </button>
        </div>
        <div className="flex">
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
            <img src={bestsellers3} alt="" />
            <AddButton />
            <p>$0.00</p>
          </div>
          <div>
            <img src={bestsellers4} alt="" />
            <AddButton />
            <p>$0.00</p>
          </div>
          <div>
            <img src="" alt="" />
            <AddButton />
            <p>$0.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}
