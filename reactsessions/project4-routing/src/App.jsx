import React from 'react'
import NavList from './components/shared/NavList.jsx'
import Homepage from './components/Homepage';
const App = () => {
  const navListItems = ["AboutUs", "Branches", "Courses", "Placement"];
  return (
    <div>
      <NavList items={navListItems}/>
      <Homepage/>
    </div>
  )
}

export default App