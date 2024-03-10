import React from 'react'
import planters1 from "../assets/images/planters1.jpg"
import planters2 from "../assets/images/planters2.jpg"

export const Planters = () => {
  return (
    <div>
      <div className="flex justify-between text-left tracking-widest p-4">
        <h2>PLANTERS</h2>
        <button className="bg-white">Shop All Planters</button>
      </div>
      <div className="flex gap-2">
        <div>
          <img src={planters1} alt="" />
        </div>
        <div>
          <img src={planters2} alt="" />
        </div>
      </div>
    </div>
  )
}
