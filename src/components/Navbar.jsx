import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx"
import logo from "../assets/images/logo.svg"
import { PiMagnifyingGlassLight } from "react-icons/pi"
import { IoCloseOutline } from "react-icons/io5"
import { IoPersonOutline } from "react-icons/io5"
import { IoMdHeartEmpty } from "react-icons/io"
import { IoCartOutline } from "react-icons/io5"
import { IoMoonOutline } from "react-icons/io5"

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <>
      <div>

        {/* Banner */}
        <div>
          <aside className="flex justify-center items-center text-sm md:text-lg bg-banner h-12 font-body tracking-widest">
            <h1>FREE SHIPPING ON ALL U.S. ORDERS $50+</h1>
          </aside>
        </div>

        {/* Navbar*/}
        <div>
          <nav>
            <div className="flex justify-between items-center p-8 md:p-10">
              <div className="border border-slate-300 rounded-md pr-1 items-center invisible lg:visible lg:flex">
                <input type="search" name="search" placeholder="Search" className="opacity-50 tracking-wide m-1 outline-none" />
                <button aria-label="search" className="text-slate-500">
                  <PiMagnifyingGlassLight />
                </button>
              </div>

              <div className="">
                <a href="">
                  {<img src={logo} alt="website logo the plant life" className="w-11/12"/>}
                </a>
              </div>

        {/* Icons */}
              <div className="flex justify-between gap-1 lg:gap-6">
                <button className="" aria-label="light/dark mode">
                  <IoMoonOutline fontSize={22}/>
                </button>
                <button className="" aria-label="user">
                  <IoPersonOutline fontSize={22}/>
                </button>
                <button className="hidden lg:visible" aria-label="favorites">
                  <IoMdHeartEmpty fontSize={22}/>
                </button>
                <button className="" aria-label="shopping cart">
                  <IoCartOutline fontSize={22}/>
                </button>
              </div>
            </div>
            <hr className="text-slate-500 w-1/2 m-auto"/>

        {/* Navbar Links */}
            <div>
              <ul className="hidden lg:flex justify-center gap-6 tracking-widest pt-6">
                <li><a href="#">Home</a></li>
                <li><a href="#plants">Plants</a></li>
                <li><a href="#plant-care">Plant Care</a></li>
                <li><a href="#planters">Planters</a></li>
                <li><a href="#gifts">Gifts</a></li>
                <li><a href="#home-decor">Home & Decor</a></li>
              </ul>
            </div>

        {/* Mobile menu */}
          <div className="absolute px-10 top-24 cursor-pointer lg:hidden">
            <RxHamburgerMenu
                  color="#002"
                  fontSize={25}
                  onClick={() => setToggleMenu(true)}
                />
          </div>
          <div className="flex absolute px-16 top-0 cursor-pointer shadow bg-white text-lg z-[999]">
              {toggleMenu && (
                <div className="relative right-6">
                  <div className="bg-green text-white flex justify-between items-center h-12">
                    <p>Shop</p>
                    <div className="cursor-pointer">
                      <IoCloseOutline fontSize={27} onClick={() => setToggleMenu(false)}/>
                    </div>
                  </div>
                  <div>
                    <ul className="flex flex-col pt-8 gap-8">
                      <li>Home</li>
                      <li>Plants</li>
                      <li>Plant Care</li>
                      <li>Planters</li>
                      <li>Gifts</li>
                      <li>Home & Decor</li>
                    </ul>
                    <div className="py-8">
                      <div className="border border-slate-300 rounded-md pr-1 flex items-center lg:hidden">
                        <input type="search" name="search" placeholder="Search" className="opacity-50 tracking-wide m-1 outline-none" />
                        <button aria-label="search" className="text-slate-500">
                          <PiMagnifyingGlassLight />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>
          </nav>
        </div>
      </div>
    </>
  )
}
