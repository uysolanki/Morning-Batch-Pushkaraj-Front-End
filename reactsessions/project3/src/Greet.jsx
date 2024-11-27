import React, { useEffect } from 'react'

const Greet = () => {
    useEffect(
        ()=>{
            alert("Welcome to FSD")
        },[]
    );
  return (
    <div>Greet</div>
  )
}

export default Greet