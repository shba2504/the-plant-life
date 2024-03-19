import React from 'react'
import succulents from "../assets/images/succulents.jpg"

export const FeatureSucc = () => {
  return (
    <div className="lg:py-4 px-10">
      <img src={succulents} alt="wide flower pot full of succulents" className="block aspect-[4/3] lg:aspect-[7/3] object-cover" />
      <button className="bg-white p-2">Shop Succulents</button>
    </div>
  )
}
