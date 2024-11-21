import React from 'react'
import {useState} from 'react';
import Button from './Button';


const Counter1 = () => {

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
        <Button mytext="Increment by 1" mycolor="red" myfontsize="32px"/>
        <Button mytext="Increment by 2" mycolor="blue" myfontsize="26px"/>
        <Button mytext="Decrement by 1" mycolor="green" myfontsize="20px"/>
        <Button mytext="Decrement by 2" mycolor="yellow" myfontsize="16px"/>
        <br/><br/>
        <span>{mycounter?mycounter:0}</span>
        </div>
      )
    }

export default Counter1