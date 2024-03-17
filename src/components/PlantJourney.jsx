import React from 'react'
import newPlanting from "../assets/images/newPlanting.jpg"
import gardeningTools from "../assets/images/gardeningTools.jpg"
import petFriendly from "../assets/images/petFriendly.jpg"
import growGarden from "../assets/images/growGarden.jpg"
import growingFlowers from "../assets/images/growingFlowers.jpg"
import composting from "../assets/images/composting.jpg"

export const PlantJourney = () => {
  return (
    <div className="py-6 px-10">
        <div className="text-left tracking-widest pb-4 text-lg lg:text-2xl">
          <h2>START YOUR PLANT JOURNEY</h2>
        </div>
        
        {/* carousel feature */}
        <div className="tracking-wide">
          <div className="flex items-start gap-2">
            <div>
              <img src={newPlanting} alt="plant hung on a railing" className="aspect-auto"/>
              <p>New to Planting?</p>
            </div>
            <div>
              <img src={gardeningTools} alt="flatlay of gardening tools with plant leaves" className="aspect-auto" />
              <p>Gardening Tools</p>
            </div>
            <div>
              <img src={petFriendly} alt="a dog sitting next to a plant" className="aspect-auto" />
              <p>Pet-Friendly Plants</p>
            </div>
            <div>
              <img src={growGarden} alt="hands working on soil in a garden" className="aspect-auto" />
              <p>Gardening Tips</p>
            </div>
            <div>
              <img src={growingFlowers} alt="daisies in a clear vase" className="aspect-auto" />
              <p>Growing Flowers</p>
            </div>
            <div>
              <img src={composting} alt="flatlay with soil on a table with gardening tools" className="aspect-auto" />
              <p>Composting</p>
            </div>
          </div>
        </div>
    </div>
  )
}
