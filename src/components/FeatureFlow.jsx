import React from 'react'
import flowers from "../assets/images/flowers.jpg"

export const FeatureFlow = () => {
  return (
    <div>
      <div className="pt-6 pb-6">
        <div>
          <img src={flowers} alt="" 
        className="block w-full" />
       </div>
       <div>
        <button className="bg-white rounded-md relative bottom-20 left-48 p-2">Shop Flowers</button>
      </div>
    </div>
    </div>
  )
}
