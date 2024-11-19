import React from 'react'
import './Navbar.css'

const Navbar = () => {

let a=10
let b=20
let c=a+b
console.log(c)

const listText=['File','Edit','Searching','View','Encoding','Lang']

  return (
   
        <ul>
            {
                listText.map(
                    (element)=>    
                     <li>{element}</li>
                    
                )
            }
        </ul>
  )
}

export default Navbar