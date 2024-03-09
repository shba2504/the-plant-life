import React from 'react'
import newArrivals1 from "../assets/images/newArrivals1.jpg"
import newArrivals2 from "../assets/images/newArrivals2.jpg"
import newArrivals3 from "../assets/images/newArrivals3.jpg"
import newArrivals4 from "../assets/images/newArrivals4.jpg"

export const NewArrivals = () => {
  return (
    <div className='bg-feature'>
      <div className="">
        <h3>NEW ARRIVALS</h3>
        <button className="bg-white">Shop New Arrivals</button>
      </div>
      <div>
        <div>
          <img src={newArrivals1} alt="" />
          <button>Add To Cart</button>
          <p>$0.00</p>
        </div>
        <div>
          <img src={newArrivals2} alt="" />
          <button>Add To Cart</button>
          <p>$0.00</p>
        </div>
        <div>
          <img src={newArrivals3} alt="" />
          <button>Add To Cart</button>
          <p>$0.00</p>
        </div>
        <div>
          <img src={newArrivals4} alt="" />
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
