import React from 'react'
import header from "../assets/images/header.jpg"

export const Header = () => {
  return (
    <header>
        <div className="">
            <div className="">
                <img src={header} />
                <div className="">
                    <p><span className="text-feature">Plant</span>Care Is <span className="text-feature">Self</span> Care</p>
                    <a href="">
                        <button className="" aria-label="">Shop Now</button>
                    </a>
                </div>
            </div>
        </div>
    </header>
  )
}
