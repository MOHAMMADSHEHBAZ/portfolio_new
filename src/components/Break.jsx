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
        <NavLink to="/" className='p-1 font-bold actBtn' exact activeClassName="active">
        {/* About */}
        <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">About</button>
        </NavLink>
        <NavLink to="/Resume" className='p-1 font-bold actBtn' activeClassName="active">
        <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Resume</button>
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
