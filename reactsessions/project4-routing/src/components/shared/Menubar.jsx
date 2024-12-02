import React from 'react'
import './Menubar.css'
import { Link } from 'react-router-dom'
const Menubar = () => {
  return (
    <div>
        <ol>
            <Link to='/'><li>Home</li></Link>
            <Link to='/aboutus'><li>About Us</li></Link>
            <Link to='/branches'><li>Branches</li></Link>
            <Link to='/courses'><li>Courses</li></Link>
            <Link to='/placements'><li>Placement</li></Link>
        </ol>
    </div>
  )
}

export default Menubar