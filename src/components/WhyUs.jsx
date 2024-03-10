import React from 'react'
import whyUs from "../assets/images/whyUs.jpg"

export const WhyUs = () => {
  return (
    <div>
      <div>
        <img src={whyUs} alt="" className=""/>
      </div>
        <div>
          <h2>WHY SHOP WITH US?</h2>
        </div>
        <div>
          <div>
            <h3>100% ORGANIC</h3>
            <p>Our plants come from our greenhouse and local organic farms.</p>
          </div>
          <div>
            <h3>30-DAY GUARANTEE</h3>
            <p>If your plants arrived damaged, we'll replace it for free!</p>
          </div>
          <div>
            <h3>PLANT CONSULTATION</h3>
            <p>If you're struggling to care for your new plant, you can book an appointment with a plant-care specialist at a low cost or check our blog!</p>
          </div>
        </div>
    </div>
  )
}
