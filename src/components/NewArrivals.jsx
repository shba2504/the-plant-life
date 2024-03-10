import React from 'react'
import newArrivals1 from "../assets/images/newArrivals1.jpg"
import newArrivals2 from "../assets/images/newArrivals2.jpg"
import newArrivals3 from "../assets/images/newArrivals3.jpg"
import newArrivals4 from "../assets/images/newArrivals4.jpg"
import { AddButton } from './AddButton'

export const NewArrivals = () => {
  return (
    <div className="bg-green mt-4">
      <div className="flex justify-between text-left p-4">
        <h1>NEW ARRIVALS</h1>
        <button className="bg-white">Shop New Arrivals</button>
      </div>
      <div className="flex">
        <div>
          <img src={newArrivals1} alt="" />
          <AddButton />
          <p>$0.00</p>
        </div>
        <div>
          <img src={newArrivals2} alt="" />
          <AddButton />
          <p>$0.00</p>
        </div>
        <div>
          <img src={newArrivals3} alt="" />
          <AddButton />
          <p>$0.00</p>
        </div>
        <div>
          <img src={newArrivals4} alt="" />
          <AddButton />
          <p>$0.00</p>
        </div>
        <div>
          <img src="" alt="" />
          <AddButton />
          <p>$0.00</p>
        </div>
      </div>
    </div>
  )
}
