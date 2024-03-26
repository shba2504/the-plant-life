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
                <div className="bg-banner flex flex-col justify-center px-10 md:order-first">
                    <div className="py-6 md:py-4 lg:py-10">
                      <h1 className="text-5xl lg:text-6xl text-left font-light"><span className="text-green">Plant</span> Care Is</h1> 
                      <h1 className="text-5xl lg:text-6xl font-light pt-4"><span className="text-green">Self</span> Care</h1>
                      <p className="lg:text-lg pt-6">Discover our wide selection of plants, planters, & more!</p>
                      <a href="">
                        <button className="bg-white mt-6 lg:text-lg focus:bg-green text-green focus:text-white font-semi-bold px-12 md:px-12 lg:px-12 p-2 md:p-1 lg:p-2 rounded-md">Shop Now</button>
                      </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
