import React from 'react'

export const Newsletter = () => {
  return (
    <div className="flex mt-4">
      <div>
        <h3 className="tracking-widest">GET IN THE KNOW</h3>
        <p>blah blah</p>
        <input type="email" name="email" id="email" placeholder="Enter your email"></input>
        <button className="bg-green text-white" type="submit" aria-label="">Subscribe</button>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  )
}
