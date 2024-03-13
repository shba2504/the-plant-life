import React from 'react'
import header from "../assets/images/header.jpg"

export const Header = () => {
  return (
    <header>
        <div className="lg:tracking-widest">
            <div className="grid md:grid-cols-2 py-8">
                <div>
                  <img src={header} alt="3 planters on a shelf" />
                </div>
                <div className="bg-banner px-10 flex flex-col items-center justify-center md:order-first">
                    <div className="py-6 md:py-4 lg:py-10">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl text-left font-light"><span className="text-green">Plant</span> Care</h1> 
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-center pt-4">Is <span className="text-green">Self</span> Care</h1>
                      <p className="lg:text-lg pt-6">Discover our wide selection of plants, planters, & more!</p>
                      <a href="">
                        <button className="bg-white mt-6 lg:text-lg focus:bg-green text-green focus:text-white px-12 md:px-12 lg:px-12 p-2 md:p-1 lg:p-2 rounded-md">Shop Now</button>
                      </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
