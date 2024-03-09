import React from 'react'
import newPlanting from "../assets/images/newPlanting.jpg"
import plantCare from "../assets/images/plantCare.jpg"
import petFriendly from "../assets/images/petFriendly.jpg"
import growGarden from "../assets/images/growGarden.jpg"

export const PlantJourney = () => {
  return (
    <div>
        <div>
            <h3>START YOUR PLANT JOURNEY</h3>
        </div>
        {/* carousel feature */}
        <div>
          <div>
            <img src={newPlanting} alt="" />
            <p>New to Planting?</p>
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
