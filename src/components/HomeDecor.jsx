import React from 'react'
import homeDecor from "../assets/images/homeDecor.jpg"
import homeDecor2 from "../assets/images/homeDecor2.jpg"
import overgrownPlants from "../assets/images/overgrownPlants.jpg"

export const HomeDecor = () => {
  return (
    <div className="py-8 px-10">
      <div className="grid md:grid-cols-2 bg-gray gap-4">
        <div className="grid items-center px-10 py-4 lg:py-0 order-last md:order-first ">
          <div>
            <h2 className="text-4xl lg:text-5xl lg:pb-6  text-center font-light"><span className="text-green">Plants</span> For Every Space.</h2>
            <p className="text-center pt-6">Browse our gallery to find ideal spaces for your plants.</p>
            <div className="flex justify-center py-2">
              <button className="bg-green lg:text-lg focus:bg-white text-white focus:text-green font-semi-bold px-12 lg:px-16 py-2 mt-8 rounded-md">Get Inspired</button>
            </div>
          </div>
        </div>
        <div>
          <img src={homeDecor2} alt="" className="aspect-[4/3] object-cover"/>
        </div>
        <div>
          <img src={overgrownPlants} alt="" className=" aspect-[4/3] object-cover" />
        </div>
        <div>
          <img src={homeDecor} alt="" className=" aspect-[4/3] object-cover" />
        </div>
      </div>
    </div>
  )
}
