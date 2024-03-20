import React from 'react'
import gift from "../assets/images/gift.jpg"

export const Gift = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 py-2 px-10 gap-8">
        <div>
          <img src={gift} alt="bouquet of flowers on a wooden table" className="aspect-[4/3] object-cover" />
        </div>
        <div className="grid items-center py-2 lg:py-0">
          <h2 className="text-5xl lg:text-6xl text-center font-light">Give The Gift That Will Make Them <span className="text-green semi-bold">Smile.</span></h2>
          <div className="flex justify-center py-2">
            <button type="submit" className="bg-green text-white lg:text-lg focus:bg-white focus:text-green font-semi-bold px-12 lg:px-16 py-2 mt-8 rounded-md">Shop Bouquets</button>
          </div>
        </div>
      </div>
    </div>
  )
}
