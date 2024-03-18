import React from 'react'
import homeDecor from "../assets/images/homeDecor.jpg"
import homeDecor2 from "../assets/images/homeDecor2.jpg"

export const HomeDecor = () => {
  return (
    <div className="py-4">
      <div className="flex items-center flex-col md:flex-row mt-4 bg-gray">
        <div className="my-2 px-10">
          <h2 className="text-5xl lg:text-6xl text-left font-light">Plants For Every Space.</h2>
          <button className="bg-green mt-6 lg:text-lg focus:bg-white text-white focus:text-green font-semi-bold px-12 md:px-12 lg:px-12 p-2 md:p-1 lg:p-2 rounded-md">Find Inspiration</button>
        </div>
        <div>
          <img src={homeDecor2} alt="" className="aspect-[3/3] object-cover"/>
        </div>
        <div>
          <img src={homeDecor} alt="" className=" aspect-[3/3] object-cover" />
        </div>
      </div>
    </div>
  )
}
