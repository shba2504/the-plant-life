import React from 'react'
import header from "../assets/images/header.jpg"

export const Header = () => {
  return (
    <header>
        <div className="">
            <div className="">
                <img src={header} />
                <div className="">
                    <p>Plant Care Is Self Care</p>
                    <a href="">
                        <button className="" aria-label="">Shop Now</button>
                    </a>
                </div>
            </div>
        </div>
    </header>
  )
}
