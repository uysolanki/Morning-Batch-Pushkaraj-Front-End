import React from 'react'
import NavList from '../shared/NavList.jsx'

const Footer = () => {
  const footerListItems = ["Contact Us", "About US", "Careers", "Location"];
  return (
    <NavList items={footerListItems}/>
  )
}

export default Footer