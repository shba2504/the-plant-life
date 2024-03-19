import React from 'react'
import whyShop from "../assets/images/whyShop.jpg"

export const WhyUs = () => {
  return (
    <div className="grid md:grid-cols-2 items-center gap-8 px-10">
      <div>
        <img src={whyShop} alt="" className="aspect-[3/3] object-cover"/>
      </div>
      <div>
        <div className="pb-8 lg:pb-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-light">Why Shop With Us?</h2>
        </div>
        <div className="">
          <div className="flex flex-col text-center gap-6">
            <div>
              <h3 className="text-2xl lg:text-3xl font-light">100% Organic</h3>
              <p className="lg:py-2">Our plants come from our greenhouse.</p>
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-light">30-Day Guarantee</h3>
              <p className="lg:py-2">If your plants arrived damaged, we'll replace it for free!</p>
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-light">Plant Consultation</h3>
              <p className="lg:py-2">Have questions about your new plant? </p><p>Book an appointment with our plant-care specialists!</p>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}
