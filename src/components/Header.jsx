import React from 'react'
import header from "../assets/images/header.jpg"

export const Header = () => {
  return (
    <header>
        <div className="lg:tracking-widest">
            <div className="grid md:grid-cols-2 pt-8 pb-6">
                <div className="">
                  <img src={header} alt="3 planters on a shelf" />
                </div>
                <div className="bg-banner px-10 flex flex-col items-center justify-center md:order-first">
                    <div className="py-10">
                      <h1 className="lg:text-6xl text-left font-light"><span className="text-green">Plant</span> Care</h1> 
                      <h1 className="lg:text-6xl font-light text-center pt-4">Is <span className="text-green">Self</span> Care</h1>
                      <p className="text-lg pt-6">Discover our wide selection of plants, planters, & more!</p>
                    </div>
                    <div>
                      <a href="">
                        <button className="bg-white focus:bg-green text-green focus:text-white pl-10 pr-10 p-2 rounded-md">Shop Now</button>
                      </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
