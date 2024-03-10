import React from 'react'
import flowers from "../assets/images/flowers.jpg"

export const FeatureFlow = () => {
  return (
    <div>
      <div className="pt-6 pb-6">
        <img src={flowers} alt="" 
       className="block w-full" />
        <button>Shop Flowers</button>
    </div>
    </div>
  )
}
