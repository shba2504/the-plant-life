import React from 'react'
import header from "../assets/images/header.jpg"

export const Header = () => {
  return (
    <header>
        <div className="tracking-widest">
            <div className="pt-6 pb-6">
                <img src={header} alt="" className="block w-full"/>
                <div className="bg-banner p-4 flex justify-around items-center">
                    <h1 className="text-lg"><span className="text-green">Plant</span> Care Is <span className="text-green">Self</span> Care</h1>
                    <a href="">
                        <button className="bg-white pl-10 pr-10 p-2 rounded-md" aria-label=""><span className="text-green">Shop Now</span></button>
                    </a>
                </div>
            </div>
        </div>
    </header>
  )
}
