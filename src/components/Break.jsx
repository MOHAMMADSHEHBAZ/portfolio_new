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
    <nav className='flex items-center justify-start break'>
        <NavLink to="/" className={({isActive})=>`p-1 m-1 border px-3 py-1 font-medium rounded-md text-gray-800 hover:bg-gray-800 hover:text-white ${isActive?"bg-gray-800 text-white":"text-black"}`} exact activeClassName="active">
        {/* About */}
        <button type="button" class="">About</button>
        </NavLink>
        <NavLink to="/Resume" className={({isActive})=>`p-1 m-1 border px-3 py-1 font-medium rounded-md text-gray-800 hover:bg-gray-800 hover:text-white ${isActive?"bg-gray-800 text-white":"text-black"}`} activeClassName="active">
        <button type="button" class="">Resume</button>
        </NavLink>
    </nav>
    {/* <hr /> */}
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
