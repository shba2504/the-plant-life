import React, { useState } from 'react'
import logo from "../assets/images/logo.svg"
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

export const Footer = () => {
  const [toggleOrders, setToggleOrders] = useState(false)
  const [toggleContact, setToggleContact] = useState(false)
  const [togglePlant, setTogglePlant] = useState(false)
  const [togglePolicies, setTogglePolicies] = useState(false)

  return (
    <>
    <footer>
      <div className="mt-8 px-10">
        <div className="block md:hidden pb-6">

          {/* ORDERS */}

          <div className="block border-b">
            <div className="flex justify-between items-center">
              <h3 className="">ORDERS</h3>
                <div className="cursor-pointer md:hidden">
                  <HiOutlinePlusSmall 
                    color="#002"
                    fontSize={20}
                    onClick={() => setToggleOrders(true)}/>
                </div>
            </div>

            {toggleOrders && (
              <div>
                <div className="cursor-pointer relative flex justify-end z-[999] bg-white">
                  <IoCloseOutline fontSize={20} onClick={() => setToggleOrders(false)}/>
                </div>
                <div className="">
                  <ul>
                    <li>Track My Order</li>
                    <li>Shipping and Handling</li>
                    <li>30-Day Guarantee</li>
                    <li>FAQs</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* CONTACT */}

          <div className="block border-b">
            <h3>CONTACT US</h3>
            <div className="flex items-center">
              <div className="cursor-pointer absolute right-10 md:hidden">
                <HiOutlinePlusSmall color="#002" fontSize={20}
                  onClick={() => setToggleContact(true)}/>
              </div>
            </div>

            {toggleContact && (
              <div>
                <div className="cursor-pointer relative flex justify-end z-[999] bg-white">
                  <IoCloseOutline fontSize={20} onClick={() => setToggleContact(false)}/>
                </div>
                <ul>
                  <li>Phone</li>
                  <li>Email</li>
                  <li>Live Chat</li>
                  <li>Report Issue</li>
                  <li>Business Inquiries</li>
                </ul>
              </div>
            )}
          </div>

          {/* PLANT LIFE */}

          <div className="block border-b">
            <h3>THE PLANT LIFE</h3>
            <div className="flex items-center">
              <div className="cursor-pointer absolute right-10 md:hidden">
                <HiOutlinePlusSmall 
                  color="#002"
                  fontSize={20}
                  onClick={() => setTogglePlant(true)}/>
              </div>
            </div>

            {togglePlant && (
              <div>
                <div className="cursor-pointer relative flex justify-end z-[999] bg-white">
                  <IoCloseOutline fontSize={20} onClick={() => setTogglePlant(false)} />
                </div>
                <ul>
                  <li>Blog</li>
                  <li>Plant Care</li>
                  <li>Gardening</li>
                  <li>Consultations</li>
                  <li>Locations</li>
                </ul>
              </div>
            )}
          </div>

          {/* POLICIES */}

          <div className="block border-b">
            <h3>POLICIES</h3>
            <div className="flex items-center">
              <div className="cursor-pointer absolute right-10 md:hidden">
                <HiOutlinePlusSmall 
                  color="#002"
                  fontSize={20}
                  onClick={() => setTogglePolicies(true)}/>
              </div>
            </div>
            
            {togglePolicies && (
              <div>
                <div className="cursor-pointer relative flex justify-end z-[999] bg-white">
                  <IoCloseOutline fontSize={20} onClick={() => setTogglePolicies(false)} />
                </div>
                <ul>
                  <li>Returns</li>
                  <li>Terms of Use</li>
                  <li>Privacy Policy</li>
                  <li>Become an Affiliate</li>
                  <li>Do Not Sell My Info</li>
                </ul>
              </div>
            )}
          </div>

        </div>
      </div>
      <div className="bg-banner mt-4 px-10">
        <div className="flex justify-center">
          <a href="" className="">
            <img src={logo} alt="" className="pt-8 pb-4"/>
          </a>
        </div>
        <hr className="text-slate-500 w-3/4 m-auto"/>
        <p className="pt-4 pb-4 text-center">Copyright 2024</p>
      </div>
    </footer>
    </>
  )
}
