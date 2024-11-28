import React from 'react'

const Searchbar = (props) => {
  return (
    <input type="text" placeholder='Search By Product Name' onChange={props.clickHandler}/>
  )
}

export default Searchbar