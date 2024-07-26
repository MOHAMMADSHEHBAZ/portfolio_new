import React from 'react'
import Certificate from './certificates.jsx';
import Footer from './footer.jsx';
import Projects from './projects.jsx';
import Projects2 from './Projects2.jsx'
import Skills from './skills.jsx';
import Education from './Education.jsx';
import Experience from './Experience.jsx';
import Education2 from './Education2.jsx';
const MainAbout = () => {
  return (
    <>
    <Skills/>
            {/* <Education/> */}
            <Education2/>
            <Experience/>
            {/* <Projects/> */}
            <Projects2/>
            <Certificate/>
            <Footer/>
    </>
  )
}

export default MainAbout
