import React from 'react'
import homeDecor from "../assets/images/homeDecor.jpg"

export const HomeDecor = () => {
  return (
    <div className="">
      <div>
        <h2>Make Your Space <span className="text-feature">Green</span></h2>
        <button>Find Inspiration</button>
      </div>
      <div>
        <img src={homeDecor} alt="" />
      </div>
    </div>
  )
}
