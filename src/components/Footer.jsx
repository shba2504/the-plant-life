import React from 'react'
import logo from "../assets/images/logo.svg"

export const Footer = () => {
  return (
    <footer>
      <div className="bg-banner mt-4">
        <div className="flex justify-center">
          <a href="" className="">
            <img src={logo} alt="" className="pt-8 pb-4"/>
          </a>
        </div>
        <hr className=""/>
        <p className="pt-4 pb-4 text-center">Copyright 2024</p>
      </div>
    </footer>
  )
}
