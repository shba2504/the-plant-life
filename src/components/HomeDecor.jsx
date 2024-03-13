import React from 'react'
import homeDecor from "../assets/images/homeDecor.jpg"
import homeDecor2 from "../assets/images/homeDecor2.jpg"

export const HomeDecor = () => {
  return (
    <div className="px-10">
      <div className="flex mt-4 gap-2">
        <div>
          <img src={homeDecor} alt="" />
        </div>
        <div className="bg-gray">
          <h2>Plants For Every Space.</h2>
          <button className="bg-white">Find Inspiration</button>
        </div>
        <div>
          <img src={homeDecor2} alt="" />
        </div>
      </div>
    </div>
  )
}
