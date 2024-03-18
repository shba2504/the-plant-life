import React from 'react'
import gift from "../assets/images/gift.jpg"

export const Gift = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 py-8 px-10">
        <div>
          <h2 className="text-5xl lg:text-6xl text-left font-light">Give The Gift That Adds Color To Every Space. </h2>
          <p></p>
        </div>
        <div>
          <img src={gift} alt="" />
        </div>
      </div>
    </div>
  )
}
