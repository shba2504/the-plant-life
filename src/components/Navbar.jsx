import React from 'react'
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

export const Navbar = () => {
  return (
    <>
        <div>
          <aside className="font-urbanist bg-banner text-center tracking-widest">
            <h4>FREE SHIPPING ON ALL U.S. ORDERS $50+</h4>
          </aside>
        </div>
        <div>
          <nav className="font-urbanist">
            <div className="p-4">
              <div className="border rounded-md w-48">
                <input type="search" name="search" placeholder="Search product" className="p-1 pl-3" />
                <button aria-label="search" className="absolute right-36 top-24">
                  <PiMagnifyingGlassLight />
                </button>
              </div>

              <a href="" className="">
                <img src="" alt="" />
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
                <li className="">
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
    </>
  )
}
