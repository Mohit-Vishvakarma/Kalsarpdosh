import React from 'react'
import './Header.css'
import Sidebar from './Sidebar';
import Call from './Call';
import Whatsapp from './Whatsapp';

export default function Header() {
    
  return (
    <header>
        <div className="Navbar">
            <div className="logo">
                <h2 className=''>KalsarpDosh</h2>
            </div>
        <Sidebar/>
        </div>
        < Whatsapp/>
        <Call/>

</header>
    )
}
