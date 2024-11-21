import React from 'react'
import {useState} from 'react';

const Counter = () => {

const [mycounter, setMycounter] = useState(); 
console.log(mycounter)
function handleIncrement()
{
    setMycounter(mycounter?mycounter+1:1); 
    console.log(mycounter)
}

function handleDecrement()
{
    if(mycounter>=1)
    {
    setMycounter(mycounter?mycounter-1:1); 
    console.log(mycounter)
    }
}

  return (
    <div className="parent-container">
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button> <br/><br/>
    <span>{mycounter?mycounter:0}</span>
    </div>
  )
}

export default Counter