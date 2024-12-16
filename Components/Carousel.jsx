import React, { useState } from 'react'
// import image from '../public/assets/caurosalInage.jpg'
import './Carousel.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";


export default function Carousel({data}) {
const [slide, setSlide] = useState(0);

const nextSlide = () =>{
  setSlide(slide === data.length - 1 ? 0  : slide + 1)
}

const prevSlide = () =>{
  setSlide(slide === 0 ? data.length -1 : slide - 1)
}

  return (
    <>
    <div className='Carousel'>
    <BsArrowLeftCircleFill className='arrow arrowLeft' onClick={prevSlide} />
    {data.map((item, idx) => {
      return <img src='../public/assets/caurosalImage.jpg' alt={item.alt} key={idx} className={slide === idx ? 'slide' : 'slide slide-hidden'} />
    })}
    <BsArrowRightCircleFill className='arrow arrowRight' onClick={nextSlide} />
    <span className='indicators'>
      {data.map((_, idx) => {
        return (
        <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? 'indicator' : 'indicator indicator-inavtive'}></button>
        )
      })}
    </span>
    </div>

    </>
  )
}
