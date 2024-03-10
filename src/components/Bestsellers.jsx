import React from 'react'
import bestsellers1 from "../assets/images/bestsellers1.jpg"
import bestsellers2 from "../assets/images/bestsellers2.jpg"
import bestsellers3 from "../assets/images/bestsellers3.jpg"
import bestsellers4 from "../assets/images/bestsellers4.jpg"
import { AddButton } from './AddButton'

export const Bestsellers = () => {
  return (
    <div className="bg-banner mt-4">
      <div className="flex justify-between text-left p-4">
        <h3>BESTSELLERS</h3>
        <button>Shop Bestsellers</button>
      </div>
      <div className="flex">
        <div>
          <img src={bestsellers1} alt="" />
          <AddButton />
          <p>$0.00</p>
        </div>
        <div>
          <img src={bestsellers2} alt="" />
          <AddButton />
          <p>$0.00</p>
        </div>
        <div>
          <img src={bestsellers3} alt="" />
          <AddButton />
          <p>$0.00</p>
        </div>
        <div>
          <img src={bestsellers4} alt="" />
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
