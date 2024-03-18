import React from 'react'
import flowers2 from "../assets/images/flowers2.jpg"

export const FeatureFlow = () => {
  return (
    <div>
      <div className="py-4">
        <div>
          <img src={flowers2} alt="" 
        className="block w-full" />
       </div>
       <div>
        <button className="bg-white rounded-md relative bottom-20 left-48 p-2">Shop Flowers</button>
      </div>
    </div>
    </div>
  )
}
