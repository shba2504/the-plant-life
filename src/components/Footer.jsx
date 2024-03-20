import React from 'react'
import logo from "../assets/images/logo.svg"

export const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row mt-4 px-10 bg-gray">
      <div>
        <div>
          <h3>ORDERS</h3>
          <ul>
            <li>Track My Order</li>
            <li>Shipping and Handling</li>
            <li>30-Day Guarantee</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <h3>CONTACT US</h3>
          <ul>
            <li>Phone</li>
            <li>Email</li>
            <li>Live Chat</li>
            <li>Report Issue</li>
            <li>Business Inquiries</li>
          </ul>
        </div>
        <div>
          <h3>THE PLANT LIFE</h3>
          <ul>
            <li>Blog</li>
            <li>Plant Care</li>
            <li>Gardening</li>
            <li>Consultations</li>
            <li>Locations</li>
          </ul>
        </div>
        <div>
          <h3>POLICIES</h3>
          <ul>
            <li>Returns</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Become an Affiliate</li>
            <li>Do Not Sell My Info</li>
          </ul>
        </div>
      </div>
    </div>
      <div className="bg-banner mt-4 px-10">
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
