// import img from './images/bg.jpg'
// import img1 from './images/bg1.jpg'
// import img2 from './images/bg2.jpg'
// import img3 from './images/bg3.jpg'
// import img4 from './images/bg4.jpg'
import profile from './images/profile.jpg'
import './style.css'
import file from './resume/Resume.pdf'
function About(){
    return(
        <>
        {/* <div class="flex flex-col bg items-center justify-center md:flex-row p-10 anmimations" style={{ backgroundImage: `url(${img4})`, backgroundSize:`cover`, height:`100% !important`}}> */}
        <div class="flex flex-col bg items-center justify-center md:flex-row p-10 animations" >
  <div class="flex">
    {/* <img
      src={profile}
      alt="Laptop"
      className="img"
    /> */}
  </div>
  <div className='height flex items-center justify-center'>
    <div class="p-4">
      <h1 class="inline-flex text-center items-center text-white text-6xl font-bold max-sm:text-2xl">
        Mohammad Shehbaz
      </h1>
      <p class="mt-3 text-lg flex items-center justify-center text-white font-bold">
      Full Stack Developer
      </p>
      <div class="mt-4 flex items-center justify-center">
        <span className="p-4 mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
        </svg> New Delhi
        </span>
      </div>
      <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
      {/* <div class="mt-10 flex items-center justify-center">
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
      </div> */}
    </div>
  </div>
</div>

        </>
    )
}
export default About;