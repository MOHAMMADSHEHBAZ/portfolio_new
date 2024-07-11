import React from 'react'
import file from './resume/Resume.pdf'

const Mobcom = () => {
  return (
    <>
      <div className='flex align-center justify-center text-sky-900 font-bold text-3xl my-6'>Resume</div>
      <div className='flex align-ceter justify-center p-10'>
      <a href={file} download="Mohammad_Shehbaz" target='_blank'>
      <button
      type="button"
      className="ease-in duration-300 inline-flex items-center rounded-md bg-green-600 px-3 py-3 text-sm font-semibold text-white hover:bg-lime-600 hover:animate-pulse"   
      >
      Download Resume
     <svg
     xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round"
     class="ml-2 h-4 w-4"
     >
     <line x1="5" y1="12" x2="19" y2="12"></line>
     <polyline points="12 5 19 12 12 19"></polyline>
     </svg>
     </button>
     </a>
      </div>
    </>
  )
}

export default Mobcom
