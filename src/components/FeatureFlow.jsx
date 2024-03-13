import React from 'react'
import flowers3 from "../assets/images/flowers3.jpg"

export const FeatureFlow = () => {
  return (
    <div>
      <div className="py-4">
        <div>
          <img src={flowers3} alt="" 
        className="block w-full" />
       </div>
       <div>
        <button className="bg-white rounded-md relative bottom-20 left-48 p-2">Shop Flowers</button>
      </div>
    </div>
    </div>
  )
}
