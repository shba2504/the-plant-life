import React from 'react'
import bestsellers1 from "../assets/images/bestsellers1.jpg"
import bestsellers2 from "../assets/images/bestsellers2.jpg"
import bestsellers3 from "../assets/images/bestsellers3.jpg"
import bestsellers4 from "../assets/images/bestsellers4.jpg"

export const Bestsellers = () => {
  return (
    <div className="">
      <div>
        <h3>BESTSELLERS</h3>
        <button>Shop Bestsellers</button>
      </div>
      <div>
        <div>
          <img src={bestsellers1} alt="" />
          <button>Add To Cart</button>
          <p>$0.00</p>
        </div>
        <div>
          <img src={bestsellers2} alt="" />
          <button>Add To Cart</button>
          <p>$0.00</p>
        </div>
        <div>
          <img src={bestsellers3} alt="" />
          <button>Add To Cart</button>
          <p>$0.00</p>
        </div>
        <div>
          <img src={bestsellers4} alt="" />
          <button>Add To Cart</button>
          <p>$0.00</p>
        </div>
        <div>
          <img src="" alt="" />
          <button>Add To Cart</button>
          <p>$0.00</p>
        </div>
      </div>
    </div>
  )
}
