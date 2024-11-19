import React from 'react'
import './Call.css'
import { BiSolidPhoneCall } from "react-icons/bi";


export default function Call() {
  return (
    <>
        {/* <div id="Call"> */}
        <a href="tel:+919516784194" className="Call-Icon">
        <BiSolidPhoneCall />
      </a>
        {/* </div> */}
    </>

  )
}
