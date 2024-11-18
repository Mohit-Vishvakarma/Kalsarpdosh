import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom'

export default function Card({title, cardImage, cardDescription}) {

  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate('/blog');
  }

  return (
    <div className='Card'>
      {/* image of puja */}
       <div className="img">
          <img src={cardImage} alt="Loading..." />
       </div>
       
       <h3>{title}</h3>

       <p>{cardDescription}</p>

       <div className="btn">
       <button onClick={handleReadMore}>Read More</button>
       </div>
       {/* <div className="call">Call To Panditji</div> */}

    </div>
  )
}
