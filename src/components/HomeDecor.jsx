import React from 'react'
import homeDecor from "../assets/images/homeDecor.jpg"
import homeDecor2 from "../assets/images/homeDecor2.jpg"

export const HomeDecor = () => {
  return (
    <div className="py-8 px-10">
      <div className="grid md:grid-cols-2 bg-gray">
        <div className="grid py-4 px-10 order-last md:order-first ">
          <h2 className="text-5xl lg:text-6xl text-center font-light">Plants For Every Space.</h2>
          <button className="bg-green lg:text-lg focus:bg-white text-white focus:text-green font-semi-bold px-12 py-2 mt-8 md:p-1 rounded-md">Get Inspired</button>
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
