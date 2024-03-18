import React from 'react'
import shopFlowers from "../assets/images/shopFlowers.jpg"
import shopFlowers1 from "../assets/images/shopFlowers1.jpg"
import shopFlowers3 from "../assets/images/shopFlowers3.jpg"
import shopFlowers4 from "../assets/images/shopFlowers4.jpg"
import shopFlowers5 from "../assets/images/shopFlowers5.jpg"
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { AddButton } from './AddButton'

export const Flowers = () => {
  return (
    <div className="py-6 px-10 font-light">
      <div>
        <div className="flex justify-between items-center text-left py-4">
          <h2 className="text-lg lg:text-2xl tracking-widest">FLOWERS</h2>
          <div className="flex items-center">
            <p>Shop All Flowers</p>
            <button className="">
                <MdOutlineArrowRightAlt fontSize={22}/>
            </button>
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <img src={shopFlowers} alt="" />
            <AddButton />
            <p>$0.00</p>
          </div>
          <div>
            <img src={shopFlowers1} alt="" />
            <AddButton />
            <p>$0.00</p>
          </div>
          <div>
            <img src={shopFlowers4} alt="" />
            <AddButton />
            <p>$0.00</p>
          </div>
          <div>
            <img src={shopFlowers5} alt="" />
            <AddButton />
            <p>$0.00</p>
          </div>
          <div>
            <img src={shopFlowers3} alt="" />
            <AddButton />
            <p>$0.00</p>
          </div>
       </div>
      </div>
    </div>
  )
}
