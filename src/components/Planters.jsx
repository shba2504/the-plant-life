import React from 'react'
import planters1 from "../assets/images/planters1.jpg"
import planters2 from "../assets/images/planters2.jpg"
import planters3 from "../assets/images/planters3.jpg"
import planters4 from "../assets/images/planters4.jpg"
import plantersCollection from "../assets/images/plantersCollection.jpg"
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const Planters = () => {
  return (
    <div className="py-2 px-10 font-light">
      <div className="flex justify-between text-left py-4">
        <h2 className="text-lg lg:text-2xl tracking-widest">PLANTERS</h2>
        <div className="flex items-center">
          <p>Shop All Planters</p>
          <button>
            <MdOutlineArrowRightAlt fontSize={22}/>
          </button>
        </div>
      </div>
      <div className="flex">
        <div>
          <img src={planters1} alt="plants in gold containers on a wooden table" />
        </div>
        <div>
          <img src={planters3} alt="three beige planters with two on a pedestal" />
        </div>
        <div>
          <img src={planters4} alt="3 bronze planters" />
        </div>
        <div>
          <img src={planters2} alt="2 plants, one dark and one light" />
        </div>
        <div>
          <img src={plantersCollection} alt="a collection of various planters: white, brown, and gold" />
        </div>
      </div>
    </div>
  )
}
