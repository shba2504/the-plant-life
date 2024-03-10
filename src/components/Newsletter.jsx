import React from 'react'

export const Newsletter = () => {
  return (
    <div className="flex mt-4">
      <div>
        <h3 className="tracking-widest">GET IN THE KNOW</h3>
        <p></p>
        <input type="email" name="email" id="email" placeholder="Enter your email"></input>
        <button className="bg-green text-white" type="submit" aria-label="">Subscribe</button>
      </div>
      <div>
        <div>
          <h3>ORDERS</h3>
          <p>Track My Order</p>
          <p>Shipping and Handling</p>
          <p>30-Day Guarantee</p>
          <p>FAQs</p>
        </div>
        <div>
          <h3>CONTACT US</h3>
          <p>Phone</p>
          <p>Email</p>
          <p>Live Chat</p>
          <p>Report Issue</p>
          <p>Business Inquiries</p>
        </div>
        <div>
          <h3>THE PLANT LIFE</h3>
          <p>Blog</p>
          <p>Plant Care</p>
          <p>Gardening</p>
          <p>Consultations</p>
          <p>Locations</p>
        </div>
        <div>
          <h3>POLICIES</h3>
          <p>Returns</p>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Become an Affiliate</p>
          <p>Do Not Sell My Info</p>
        </div>
      </div>
    </div>
  )
}
