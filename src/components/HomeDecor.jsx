import React from 'react'
import homeDecor from "../assets/images/homeDecor.jpg"
import homeDecor2 from "../assets/images/homeDecor2.jpg"

export const HomeDecor = () => {
  return (
    <div className="pt-4">
      <div className="flex items-center flex-col md:flex-row mt-4 bg-gray">
        <div className="lg:py-4 px-10 order-last md:order-first">
          <h2 className="text-5xl lg:text-6xl text-left font-light mr-32 md:mr-10 py-6 md:py-0 ">Plants For Every Space.</h2>
          <button className="bg-green mt-8 lg:text-lg focus:bg-white text-white focus:text-green font-semi-bold px-12 md:px-8 lg:px-12 p-2 md:p-1 rounded-md">Get Inspired</button>
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
