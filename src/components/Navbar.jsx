import React from 'react'
import logo from "../assets/images/logo.svg"
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

export const Navbar = () => {
  return (
    <>
      <div>
        <div>
          <aside className="flex justify-center items-center bg-banner h-12 font-body tracking-widest">
            <h1>FREE SHIPPING ON ALL U.S. ORDERS $50+</h1>
          </aside>
        </div>
        <div>
          <nav>
            <div className="flex justify-between items-center p-10 pb-6">
              <div className="border border-slate-300 rounded-md pr-1 flex items-center">
                <input type="search" name="search" placeholder="Search" className="opacity-50 tracking-wide m-1" />
                <button aria-label="search" className="text-slate-500">
                  <PiMagnifyingGlassLight />
                </button>
              </div>

              <a href="">
                {<img src={logo} alt="website logo the plant life" className="mr-4"/>}
              </a>
              <div className="flex gap-6">
                <button className="" aria-label="light/dark mode">
                  <IoMoonOutline fontSize={22}/>
                </button>
                <button className="" aria-label="user">
                  <IoPersonOutline fontSize={22}/>
                </button>
                <button className="" aria-label="favorites">
                  <IoMdHeartEmpty fontSize={22}/>
                </button>
                <button className="" aria-label="shopping cart">
                  <IoCartOutline fontSize={22}/>
                </button>
              </div>
            </div>
            <hr className="text-slate-500 w-1/2 m-auto"/>
            <div>
              <ul className="flex justify-center gap-6 tracking-widest pt-6">
                <li><a href="#">Home</a></li>
                <li><a href="#plants">Plants</a></li>
                <li><a href="#plant-care">Plant Care</a></li>
                <li><a href="#planters">Planters</a></li>
                <li><a href="#gifts">Gifts</a></li>
                <li><a href="#home-decor">Home & Decor</a></li>
              </ul>
            </div>
          </nav>
        </div>
        </div>
    </>
  )
}
