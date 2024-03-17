import React from 'react'
import whyShop from "../assets/images/whyShop.jpg"

export const WhyUs = () => {
  return (
    <div className="grid md:grid-cols-2 py-8 gap-4 px-10">
      <div>
        <img src={whyShop} alt="" className=""/>
      </div>
      <div className="px-8">
        <div className="pb-4">
          <h2 className="text-5xl lg:text-6xl font-light">Why Shop With Us?</h2>
        </div>
        <div className="text-center">
          <div>
            <h3 className="text-3xl font-light">100% Organic</h3>
            <p>Our plants come from our greenhouse and local organic farms.</p>
          </div>
          <div>
            <h3 className="text-3xl font-light">30-Day Guarantee</h3>
            <p>If your plants arrived damaged, we'll replace it for free!</p>
          </div>
          <div>
            <h3 className="text-3xl font-light">Plant Consultation</h3>
            <p>Have questions about your new plant? Book an appointment with a plant-care specialist at a low cost or check our blog!</p>
          </div>
        </div>
        </div>
    </div>
  )
}
