import React from 'react'
import succulents from "../assets/images/succulents.jpg"

export const FeatureSucc = () => {
  return (
    <div className="pt-6 pb-6">
      <img src={succulents} alt="" className="block w-full" />
      <button className="bg-white p-2">Shop Succulents</button>
    </div>
  )
}
