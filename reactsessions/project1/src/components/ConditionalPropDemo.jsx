import React,{useState} from 'react'
import Button from './Button'

const ConditionalPropDemo = () => {

    const [toggle,setToggle]=useState(false)
    function handleClick()
    {
        setToggle(!toggle)
    }
  return (
    <div>
        <Button 
        mytext={toggle?"Active":"Inactive"}
        mycolor={toggle?"green":"red"} 
        onclickhandler={handleClick}>
        </Button>
    </div>
  )
}

export default ConditionalPropDemo