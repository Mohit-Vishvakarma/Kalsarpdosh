import React from 'react'
import './Card.css'

export default function Card({title, cardImage, cardDescription}) {

  return (
    <div className='Card'>
      {/* image of puja */}
       <div className="img">
          <img src={cardImage} alt="Loading..." />
       </div>
       
       <h3>{title}</h3>

       <p>{cardDescription}</p>

       <div className="btn">
       <button><a href="tel:+91 9516784194">Call for free Consult</a></button>

       </div>

    </div>
  )
}
