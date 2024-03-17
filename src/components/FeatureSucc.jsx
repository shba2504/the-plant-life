import React from 'react'
import succulents from "../assets/images/succulents.jpg"

export const FeatureSucc = () => {
  return (
    <div className="py-4">
      <img src={succulents} alt="wide flower pot full of succulents" className="block w-full" />
      <button className="bg-white p-2">Shop Succulents</button>
    </div>
  )
}
