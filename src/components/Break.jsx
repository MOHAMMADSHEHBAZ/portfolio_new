import { BrowserRouter, Route,Routes, NavLink} from "react-router-dom";
import MainAbout from "./MainAbout";
import Resume from "./Resume";
import { isMobile } from 'react-device-detect';
import Mobcom from "./Mobcom";
import React from 'react'

const Break = () => {
  return (
    <>
    <BrowserRouter>
    <nav className='flex items-center justify-start'>
        <NavLink to="/" className='p-1 font-bold route' exact activeClassName="active">
        About
        </NavLink>
        <NavLink to="/Resume" className='p-1 font-bold route' activeClassName="active">
        Resume
        </NavLink>
    </nav>
    <hr />
          <Routes>
            <Route path="/" element={<MainAbout/>}/>
            {/* <Route path="/Resume" element={<Resume/>}/> */}
            <Route path="/Resume" element={isMobile ? <Mobcom/> : <Resume/>} />
          </Routes>
    </BrowserRouter>
    </>
  )
}

export default Break
