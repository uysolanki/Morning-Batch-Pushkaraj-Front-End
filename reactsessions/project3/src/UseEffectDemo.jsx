import React, { useEffect, useState } from 'react'

const UseEffectDemo = () => {
    const [a,setA]=useState(10)
    const [b,setB]=useState(20)
    const [c,setC]=useState(30)

    function incrementA()
    {
        setA(a+1)
    }
    function incrementB()
    {
        setB(b+1)
    }
    function incrementC()
    {
        setC(c+1)
    }
    function displayHeading()
    {
        alert("modification happened")
    }

    
    
    useEffect(
        ()=>{
            displayHeading()
        },[]
    )
    //[] dependency array

    //1. [] only once while component load
    //2. [a,b] only when a or b variable is modified
    //3. dont give dep array - for each variable
  return (
    <div>
        <button onClick={incrementA}>Increment A</button><span>{a}</span>
        <button onClick={incrementB}>Increment B</button><span>{b}</span>
        <button onClick={incrementC}>Increment C</button><span>{c}</span>
    </div>
  )
}

export default UseEffectDemo