import React from 'react'
import './Navbar.css'

const Navbar = () => {

let a=10
let b=20
let c=a+b
console.log(c)

  return (
    <div>
        <ul>
            <li>File</li>
            <li>Edit</li>
            <li>View</li>
            <li>Close</li>
            <li>{c}</li>
        </ul>
           
    </div>
  )
}

export default Navbar