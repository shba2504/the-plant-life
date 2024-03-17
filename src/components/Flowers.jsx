import React from 'react'
import flowers3 from "../assets/images/flowers3.jpg"
import { MdOutlineArrowRightAlt } from 'react-icons/md'

export const Flowers = () => {
  return (
    <div className="py-6 px-10">
      <div>
        <div className="flex justify-between items-center text-left">
          <h2 className="text-lg lg:text-2xl tracking-widest">FLOWERS</h2>
          <div className="flex items-center">
            <p>Shop All Flowers</p>
            <button className="">
                <MdOutlineArrowRightAlt fontSize={22}/>
            </button>
          </div>
        </div>
        <div className="flex">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <img src={flowers3} alt="" />
          </div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" />
          </div>
       </div>
      </div>
    </div>
  )
}
