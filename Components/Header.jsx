import React from 'react'
import './Header.css'
import Sidebar from './Sidebar';
import Call from './Call';

export default function Header() {
    
  return (
    <header>
        <div className="Navbar">
            <div className="logo">
                <h2 className=''>KalsarpDosh</h2>
            </div>
        <Sidebar/>
    </div>
    <Call/>
</header>
    )
}
