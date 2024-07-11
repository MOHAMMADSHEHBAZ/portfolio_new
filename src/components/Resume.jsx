import React from 'react'
import Res from './resume/Resume.pdf'
import Footer from './footer.jsx';
const Resume = () => {
  return (
    <>
    <div className='flex align-center justify-center text-sky-900 font-bold text-3xl my-6'>Resume</div>
    <iframe
    src={Res}
    width="100%"
    height="600px"
    title="Resume">
    </iframe> 
    <Footer/>
    </>
  )
}

export default Resume
