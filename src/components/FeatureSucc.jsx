import React from 'react'
import succulents from "../assets/images/succulents.jpg"

export const FeatureSucc = () => {
  return (
    <div>
      <img src={succulents} alt="" className="block w-full" />
      <button>Shop Succulents</button>
    </div>
  )
}
