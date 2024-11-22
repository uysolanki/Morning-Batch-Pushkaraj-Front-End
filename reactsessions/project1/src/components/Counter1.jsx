import React from 'react'
import {useState} from 'react';
import Button from './Button';
import { MdExposurePlus1 } from "react-icons/md";

const Counter1 = () => {

    const [mycounter, setMycounter] = useState(); 
    // console.log(mycounter)
    function handleIncrement()
    {
        setMycounter(mycounter?mycounter+1:1); 
        //console.log(mycounter)
    }
    
    function handleDecrement()
    {
        if(mycounter>=1)
        {
        setMycounter(mycounter?mycounter-1:1); 
        //console.log(mycounter)
        }
    }
    const student={
      rno:18,
      sname:"Virat",
      per:78.5
    }
      return (
        <div className="parent-container">
        <Button mycolor="red" myfontsize="32px" myicon={<MdExposurePlus1/>} onclickhandler={handleIncrement} />
        <Button mytext="Increment by 2" mycolor="blue" stud={student} />
        <Button mytext="Decrement by 1" mycolor="green" myfontsize="20px"/>
        <Button mytext="Decrement by 2" mycolor="yellow" myfontsize="16px"/>
        <br/><br/>
        <span>{mycounter?mycounter:0}</span>
        </div>
      )
    }

export default Counter1