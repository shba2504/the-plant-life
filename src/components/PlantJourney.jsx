import React from 'react'
import newPlanting from "../assets/images/newPlanting.jpg"
import plantCare from "../assets/images/plantCare.jpg"
import petFriendly from "../assets/images/petFriendly.jpg"
import growGarden from "../assets/images/growGarden.jpg"

export const PlantJourney = () => {
  return (
    <div className="p-4">
        <div className="text-left tracking-widest pb-4">
            <h2>START YOUR PLANT JOURNEY</h2>
        </div>
        {/* carousel feature */}
        <div className="flex gap-2 tracking-wide">
          <div>
            <div>
              <img src={newPlanting} alt="" className=""/>
            </div>
            <div>
              <p>New to Planting?</p>
            </div>
          </div>
          <div>
            <img src={plantCare} alt="" />
            <p>Plant Care</p>
          </div>
          <div>
            <img src={petFriendly} alt="" />
            <p>Pet-Friendly Plants</p>
          </div>
          <div>
            <img src={growGarden} alt="" />
            <p>Grow A Garden</p>
          </div>
          <div>
            <img src={growGarden} alt="" />
            <p>Grow A Garden</p>
          </div>
        </div>
        <div>
        </div>
    </div>
  )
}
