import React from 'react'
import logo from "../assets/images/logo.svg"
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

export const Navbar = () => {
  return (
    <>
      <div>
        <div>
          <aside className="font-urbanist bg-banner text-center tracking-widest">
            <h1>FREE SHIPPING ON ALL U.S. ORDERS $50+</h1>
          </aside>
        </div>
        <div>
          <nav className="font-urbanist">
            <div className="flex pt-4 pb-4">
              <div className="border rounded-md">
                <input type="search" name="search" placeholder="Search product" className="p-1" />
                <button aria-label="search" className="">
                  <PiMagnifyingGlassLight />
                </button>
              </div>

              <a href="" className="">
                {<img src={logo} alt="website logo the plant life" />}
              </a>
              <div className="">
                <button className="" aria-label="">
                  <MdOutlineDarkMode />
                </button>
                <button className="" aria-label="user">
                  <IoPersonOutline />
                </button>
                <button className="" aria-label="favorites">
                  <IoMdHeartEmpty />
                </button>
                <button className="" aria-label="cart item">
                  <data className="" value="">$0.00</data>
                  <MdOutlineShoppingCart />
                </button>
              </div>
            </div>
            <div>
              <ul className="">
                <li className="text-center">
                  <a href="/">Home</a>
                  <a href="#plants">Plants</a>
                  <a href="#plant-care">Plant Care</a>
                  <a href="#planters">Planters</a>
                  <a href="#gifts">Gifts</a>
                  <a href="home-decor">Home & Decor</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        </div>
    </>
  )
}
