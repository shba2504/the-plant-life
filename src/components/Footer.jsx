import React from 'react'
import logo from "../assets/images/logo.svg"

export const Footer = () => {
  return (
    <footer>
      <div className="bg-banner mt-4">
        <img src={logo} alt="" className="pt-4 pb-4"/>
        <hr className=""/>
        <p className="pt-4 pb-4">Copyright 2024</p>
      </div>
    </footer>
  )
}
