import React from 'react'
import flowers from "../assets/images/flowers.jpg"

export const FeatureFlow = () => {
  return (
    <div>
      <div className="lg:py-4">
        <div>
          <img src={flowers} alt="" 
        className="block aspect-[4/3] lg:aspect-[7/3] object-cover" />
       </div>
       <div>
        <button className="bg-white rounded-md relative bottom-20 left-48 p-2">Shop Flowers</button>
      </div>
    </div>
    </div>
  )
}
