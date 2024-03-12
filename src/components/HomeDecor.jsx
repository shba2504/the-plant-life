import React from 'react'
import homeDecor from "../assets/images/homeDecor.jpg"
import homeDecor2 from "../assets/images/homeDecor2.jpg"

export const HomeDecor = () => {
  return (
    <div className="">
      <div className="flex mt-4 gap-2 p-4">
        <div>
          <img src={homeDecor} alt="" />
        </div>
        <div className="bg-gray">
          <h2>Make Your Space <span className="text-green">Green</span></h2>
          <button className="bg-white">Find Inspiration</button>
        </div>
        <div>
          <img src={homeDecor2} alt="" />
        </div>
      </div>
    </div>
  )
}
