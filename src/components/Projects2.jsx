import React from 'react'
import weather from './images/weatherP.png';
import speech from './images/speech.jpg';
import code from './images/code.jpg';
import menu from './images/menu.jpg';
import tictac from './images/tictac.png';
import text from './images/text.jpg';
import qr from './images/qr.png'
import news from './images/news.png'
import notes from './images/notes.png'
import blog from './images/blog.png'
import url from './images/url.png'

const Projects2 = () => {
  return (
      <>
      <div class="flex flex-col space-y-4 px-4 py-6 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
        <h2 class="text-2xl text-gray-800 font-bold">Projects</h2>      
        </div>
      </div>
      <div className='md:flex items-center justify-center'>
        <div className='md:grid md:grid-cols-2 p-3 md:gap-8'>
            
        <a class="block max-w-xl mb-5 bg-white border border-gray-200 rounded-t-lg shadow">
        <img src={blog} className=' rounded-t-lg min-h-72 min-w-full' alt="" loading='lazy' />
        <div className='p-5'>
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-800">Blogging Application</h5>
        <p class="font-normal text-gray-700">
        <span class="mb-2 mr-2 inline-block rounded-md bg-gray-50 px-3 py-1 text-[16px] font-semibold text-gray-800">
        ReactJs   
        </span>
        <span class="mb-2 mr-2 inline-block rounded-md bg-gray-50 px-3 py-1 text-[16px] font-semibold text-gray-800">
        Redux  
        </span>
        <span class="mb-2 mr-2 inline-block rounded-md bg-gray-50 px-3 py-1 text-[16px] font-semibold text-gray-800">
        TailwindCss  
        </span>
        <span class="mb-2 mr-2 inline-block rounded-md bg-gray-50 px-3 py-1 text-[16px] font-semibold text-gray-800">
        Appwrite   
        </span>
        </p>
        <p class="font-normal text-gray-700">
        <a href="https://thebloggg.vercel.app/" target='_blank'>
        <button type="button" class="text-white bg-gray-800 border hover:bg-white hover:text-black hover:border font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none ">Live
        </button> 
        </a>  
        <a href="https://github.com/MOHAMMADSHEHBAZ/The_Blog" target='_blank' className='cursor-pointer'>
        <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/></svg>
        </a>
        </p>
        </div>
        </a>

        <a class="block max-w-xl mb-5 bg-white border border-gray-200 rounded-t-lg shadow">
        <img src={notes} className=' rounded-t-lg min-h-72 min-w-full' alt="" loading='lazy' />
        <div className='p-5'>
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-800">Notes Share</h5>
        <p class="font-normal text-gray-700">
        <span class="mb-2 mr-2 inline-block rounded-md bg-gray-50 px-3 py-1 text-[16px] font-semibold text-gray-800">
        ReactJs   
        </span>
        <span class="mb-2 mr-2 inline-block rounded-md bg-gray-50 px-3 py-1 text-[16px] font-semibold text-gray-800">
        Redux  
        </span>
        <span class="mb-2 mr-2 inline-block rounded-md bg-gray-50 px-3 py-1 text-[16px] font-semibold text-gray-800">
        TailwindCss  
        </span>
        <span class="mb-2 mr-2 inline-block rounded-md bg-gray-50 px-3 py-1 text-[16px] font-semibold text-gray-800">
        Appwrite   
        </span>
        </p>
        <p class="font-normal text-gray-700">
        <a href="https://notesshare.vercel.app/" target='_blank'>
        <button type="button" class="text-white bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none border hover:bg-white hover:text-black">Live
        </button> 
        </a>  
        <a href="https://github.com/MOHAMMADSHEHBAZ/notes_app" target='_blank' className='cursor-pointer'>
        <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/></svg>
        </a>
        </p>
        </div>
        </a>

        <a class="block max-w-xl mb-5 bg-white border border-gray-200 rounded-t-lg shadow">
        <img src={url} className='rounded-t-lg max-h-72 min-w-full' alt="" loading='lazy' />
        <div className='p-5'>
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-800">URL Shortener</h5>
        <p class="font-normal text-gray-700">
        <span class="mb-2 mr-2 inline-block rounded-md bg-gray-50 px-3 py-1 text-[16px] font-semibold text-gray-800">
        NextJs   
        </span>
        <span class="mb-2 mr-2 inline-block rounded-md bg-gray-50 px-3 py-1 text-[16px] font-semibold text-gray-800">
        Prisma ORM 
        </span>
        <span class="mb-2 mr-2 inline-block rounded-md bg-gray-50 px-3 py-1 text-[16px] font-semibold text-gray-800">
        MySQL  
        </span>
        </p>
        <p class="font-normal text-gray-700">
        <a href="https://github.com/MOHAMMADSHEHBAZ/url_shortener">
        <button type="button" class="text-white bg-gray-800 border hover:bg-white hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none ">Live
        </button> 
        </a>  
        <a href="https://github.com/MOHAMMADSHEHBAZ/url_shortener" target='_blank' className='cursor-pointer'>
        <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/></svg>
        </a>
        </p>
        </div>
        </a>

        <a class="block max-w-xl mb-5 bg-white border border-gray-200 rounded-t-lg shadow">
        <img src={weather} className=' rounded-t-lg min-h-72 min-w-full' alt="" loading='lazy' />
        <div className='p-5'>
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-800">Weather App</h5>
        <p class="font-normal text-gray-700">

        <span class="mb-2 mr-2 inline-block rounded-md bg-gray-50 px-3 py-1 text-[16px] font-semibold text-gray-800">
        ReactJs   
        </span>
        </p>
        <p class="font-normal text-gray-700">
        <a href="https://dailyweatherupdates.vercel.app/" target='_blank'>
        <button type="button" class="text-white bg-gray-800 border hover:bg-white hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none ">Live
        </button> 
        </a>  
        <a href="https://github.com/MOHAMMADSHEHBAZ/Weather-App" target='_blank' className='cursor-pointer'>
        <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/></svg>
        </a>
        </p>
        </div>
        </a>
            
        <a class="block max-w-xl mb-5 bg-white border border-gray-200 rounded-t-lg shadow">
        <img src={speech} className='rounded-t-lg max-h-72 min-w-full' alt="" loading='lazy'/>
        <div className='p-5'>
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-800">Speech Recognition App</h5>
        <p class="font-normal text-gray-700">
        
        <span class="mb-2 mr-2 inline-block rounded-md bg-gray-50 px-3 py-1 text-[16px] font-semibold text-gray-800">
        ReactJs   
        </span>
        </p>
        <p class="font-normal text-gray-700">
        <a href="https://github.com/MOHAMMADSHEHBAZ/Speech-Recognition-App">
        <button type="button" class="text-white bg-gray-800 border hover:bg-white hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none ">Live
        </button> 
        </a>  
        <a href="https://github.com/MOHAMMADSHEHBAZ/Speech-Recognition-App" target='_blank' className='cursor-pointer'>
        <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/></svg>
        </a>
        </p>
        </div>
        </a>

        <a class="block max-w-xl mb-5 bg-white border border-gray-200 rounded-t-lg shadow">
        <img src={news} className='rounded-t-lg max-h-72 min-w-full' alt="" loading='lazy' />
        <div className='p-5'>
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-800">News Application</h5>
        <p class="font-normal text-gray-700">
        
        <span class="mb-2 mr-2 inline-block rounded-md bg-gray-50 px-3 py-1 text-[16px] font-semibold text-gray-800">
        ReactJs   
        </span>
        </p>
        <p class="font-normal text-gray-700">
        <a href="https://github.com/MOHAMMADSHEHBAZ/news_app">
        <button type="button" class="text-white bg-gray-800 border hover:bg-white hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none ">Live
        </button> 
        </a>  
        <a href="https://github.com/MOHAMMADSHEHBAZ/news_app" target='_blank' className='cursor-pointer'>
        <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/></svg>
        </a>
        </p>
        </div>
        </a>
            
        

        {/* <a class="block max-w-xl bg-white border border-gray-200 rounded-t-lg shadow">
        <img src={menu} className='rounded-t-lg max-h-72 min-w-full' alt="" loading='lazy' />
        <div className='p-5'>
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-800">Restaurant WebPage</h5>
        <p class="font-normal text-gray-700">
        <span class="mb-2 mr-2 inline-block rounded-md bg-gray-50 px-3 py-1 text-[16px] font-semibold text-gray-800">
        HTML    
        </span>
        <span class="mb-2 mr-2 inline-block rounded-md bg-gray-50 px-3 py-1 text-[16px] font-semibold text-gray-800">
        CSS    
        </span>
        <span class="mb-2 mr-2 inline-block rounded-md bg-gray-50 px-3 py-1 text-[16px] font-semibold text-gray-800">
        JavaScript   
        </span>
        <span class="mb-2 mr-2 inline-block rounded-md bg-gray-50 px-3 py-1 text-[16px] font-semibold text-gray-800">
        ReactJs   
        </span>
        </p>
        <p class="font-normal text-gray-700">
        <a href="https://github.com/MOHAMMADSHEHBAZ/Restaurant-Webpage">
        <button type="button" class="text-white bg-gray-800 hover:bg-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none ">Live
        </button> 
        </a>  
        <a href="https://github.com/MOHAMMADSHEHBAZ/Restaurant-Webpage" target='_blank' className='cursor-pointer'>
        <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/></svg>
        </a>
        </p>
        </div>
        </a>
            
        <a class="block max-w-xl bg-white border border-gray-200 rounded-t-lg shadow">
        <img src={qr} className='rounded-t-lg max-h-72 min-w-full' alt="" loading="lazy"/>
        <div className='p-5'>
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-800">QR Code Generator</h5>
        <p class="font-normal text-gray-700">
        <span class="mb-2 mr-2 inline-block rounded-md bg-gray-50 px-3 py-1 text-[16px] font-semibold text-gray-800">
        HTML    
        </span>
        <span class="mb-2 mr-2 inline-block rounded-md bg-gray-50 px-3 py-1 text-[16px] font-semibold text-gray-800">
        CSS    
        </span>
        <span class="mb-2 mr-2 inline-block rounded-md bg-gray-50 px-3 py-1 text-[16px] font-semibold text-gray-800">
        JavaScript   
        </span>
        <span class="mb-2 mr-2 inline-block rounded-md bg-gray-50 px-3 py-1 text-[16px] font-semibold text-gray-800">
        ReactJs   
        </span>
        </p>
        <p class="font-normal text-gray-700">
        <a href="https://qrcodeconvertor.vercel.app/">
        <button type="button" class="text-white bg-gray-800 hover:bg-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none ">Live
        </button> 
        </a>  
        <a href="https://github.com/MOHAMMADSHEHBAZ/QR-Code-Generator" target='_blank' className='cursor-pointer'>
        <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/></svg>
        </a>
        </p>
        </div>
        </a> */}
          
        </div>
      </div>
      </>
  )
}

export default Projects2
