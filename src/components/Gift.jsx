import React from 'react'
import gift from "../assets/images/gift.jpg"

export const Gift = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 py-8 px-10 gap-8">
        <div>
          <img src={gift} alt="" className="aspect-[5/3] object-cover" />
        </div>
        <div className="flex items-center">
          <h2 className="text-5xl lg:text-6xl text-left font-light">Give The Gift That Adds <span className="text-green semi-bold">Color</span> To Every Space. </h2>
          <p></p>
        </div>
      </div>
    </div>
  )
}
