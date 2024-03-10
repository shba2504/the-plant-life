import React from 'react'
import homeDecor from "../assets/images/homeDecor.jpg"

export const HomeDecor = () => {
  return (
    <div className="flex mt-4">
      <div className="bg-gray">
        <h2>Make Your Space <span className="text-green">Green</span></h2>
        <button className="bg-white">Find Inspiration</button>
      </div>
      <div>
        <img src={homeDecor} alt="" />
      </div>
    </div>
  )
}
