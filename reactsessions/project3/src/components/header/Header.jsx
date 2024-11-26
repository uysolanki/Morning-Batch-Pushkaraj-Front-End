import React from 'react'
import NavList from '../shared/NavList.jsx'

const Header = () => {
  const applicationListItems = ["TextReader", "Calculator", "App3", "App4", "App5","App6"];
  return (
    <NavList items={applicationListItems}/>
  )
}

export default Header