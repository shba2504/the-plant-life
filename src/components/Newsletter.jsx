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
  )
}
