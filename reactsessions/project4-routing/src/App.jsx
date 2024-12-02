import React from 'react'
import NavList from './components/shared/NavList.jsx'
import Homepage from './components/Homepage.jsx';
import AboutUs from './components/AboutUs.jsx';
import Branches from './components/Branches.jsx';
import Courses from './components/Courses.jsx';
import Placement from './components/Placement.jsx';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Menubar from './components/shared/Menubar.jsx';
const App = () => {
  const navListItems = ["AboutUs", "Branches", "Courses", "Placement"];
  return (
    <div>
        <Router>
          <Menubar/>
            <Routes>
                  
                 <Route
                 path='/'
                 element={
                  <>
                  <Homepage/>
                  </>
                 }
                 />

                 

                <Route
                 path='/aboutus'
                 element={
                  <>
                  <AboutUs/>
                  </>
                 }
                />


                

                <Route
                 path='/branches'
                 element={
                  <>
                  <Branches/>
                  </>
                 }
                />


                 
                <Route
                 path='/courses'
                 element={
                  <>
                  <Courses/>
                  </>
                 }
                />

                <Route
                 path='/placements'
                 element={
                  <>
                  <Placement/>
                  </>
                 }
                />
            </Routes>
        </Router>
    </div>
  )
}

export default App