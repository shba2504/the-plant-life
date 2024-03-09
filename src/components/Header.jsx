import React from 'react'
import header from "../assets/images/header.jpg"

export const Header = () => {
  return (
    <header>
        <div className="m-feature">
            <div className="pt-6 pb-6">
                <img src={header} alt="" className="block w-full"/>
                <div className="bg-banner p-4 flex justify-around">
                    <p><span className="text-green">Plant</span> Care Is <span className="text-green">Self</span> Care</p>
                    <a href="">
                        <button className="bg-white pl-8 pr-8" aria-label=""><span className="text-green">Shop Now</span></button>
                    </a>
                </div>
            </div>
        </div>
    </header>
  )
}
