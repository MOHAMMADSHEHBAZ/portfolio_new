import weather from './images/weatherP.png';
import speech from './images/speech.jpg';
import code from './images/code.jpg';
import menu from './images/menu.jpg';
import tictac from './images/tictac.png';
import text from './images/text.jpg';
import qr from './images/qr.png'
function Projects(){
    return(
        <>
        <section class="mx-auto w-full max-w-7xl px-4 py-5 education">
        <div class="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
        <h2 class="text-3xl font-bold">Projects</h2>      
        </div>
        </div>
        <div className=' mt-5 bg-white rounded-2xl'>
        {/* First box */}
        <div className="flex flex-row justify-center items-center max-sm:flex-col ">
            {/* first card */}
            <div class="card max-sm:w-5/6" style={{ backgroundImage: `url(${weather})`, backgroundSize:`cover`, height:`100% !important`}}>
            {/* <p className='heading'>Weather App</p> */}
            <div class="card__content">
            <p class="card__title">Weather App</p>
            <p class="card__description">–An application for searching weather of different countries and cities with the help of API
            </p>
            <p class="card__description">–Built using HTML,CSS,JavaScript,ReactJS
            </p>
            <p class="card__description mt-10">
            <a href="https://dailyweatherupdates.vercel.app" target='_blank'>
            <button
            type="button"
            class="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
            Live
            </button></a>
            </p>
            </div>
            </div>
            {/* first card */}
            {/* second card */}
            <div class="card max-sm:w-5/6" style={{ backgroundImage: `url(${speech})`, backgroundSize:`cover`, height:`100% !important`}}>
            <p className='heading'>Speech Recognition App</p>
            <div class="card__content">
            <p class="card__title">Speech Recognition App</p>
            <p class="card__description">–Speech Recognition app is an helpful application by which user’s can converts speech into a text</p>
            <p class="card__description">–Built using HTML,CSS,React Speech Recognition Hook
            </p>
            <p class="card__description mt-10">
            <a href="https://github.com/MOHAMMADSHEHBAZ/Speech-Recognition-App.git" target='_blank'>
            <button
            type="button"
            class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
            GitHub
            </button></a>
            </p>
            </div>
            </div>
            {/* second card */}
        </div>
        {/* second box */}
        <div className="flex flex-row justify-center items-center max-sm:flex-col">
            {/* first card */}
            <div class="card max-sm:w-5/6" style={{ backgroundImage: `url(${code})`, backgroundSize:`cover`, height:`100% !important`}}>
            <p className='heading'>Online Code Editor</p>
            <div class="card__content">
            <p class="card__title">Online Code Editor</p>
            <p class="card__description">–The Code editor that allow user to write or make changes to their code.
            </p>
            <p class="card__description">–Built using HTML, CSS, JavaScript, ReactJS
            </p>
            <p class="card__description mt-10">
            <a href="https://github.com/MOHAMMADSHEHBAZ/onlinecodeeditor.git" target='_blank'>
            <button
            type="button"
            class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
            GitHub
            </button></a>
            </p>
            </div>
            </div>
            {/* first card */}
            {/* second card */}
            <div class="card max-sm:w-5/6" style={{ backgroundImage: `url(${menu})`, backgroundSize:`cover`, height:`100% !important`}}>
            {/* <p className='headingR'>Restaurant WebPage</p> */}
            <div class="card__content">
            <p class="card__title">Restaurant WebPage</p>
            <p class="card__description">–A Static Restaurant webpage
            </p>
            <p class="card__description">–Built using HTML, CSS, BOOTSTRAP, REACTJS</p>
            <p class="card__description mt-10">
            <a href="https://github.com/MOHAMMADSHEHBAZ/Restaurant-Webpage.git" target='_blank'>    
            <button
            type="button"
            class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
            GitHub
            </button></a>
            </p>
            </div>
            </div>
            {/* second card */}
        </div>
        {/* third box */}
        <div className="flex flex-row justify-center items-center max-sm:flex-col">
            {/* first card */}
            <div class="card max-sm:w-5/6" style={{ backgroundImage: `url(${qr})`, backgroundSize:`cover`, height:`100% !important`}}>
            <p className='heading' style={{color:"white"}}>QR Code Generator</p>
            <div class="card__content">
            <p class="card__title">QR Code Generator</p>
            <p class="card__description">–QR Code Generator</p>
            <p class="card__description">–Used to convert text into a scannable QRCode</p>
            <p class="card__description">–Built using HTML,CSS,JavaScript,ReactJS
            </p>
            <p class="card__description mt-10">
            <a href="https://qrcodeconvertor.vercel.app/" target='_blank'>    
            <button
            type="button"
            class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
            Live
            </button></a>
            </p>
            </div>
            </div>
            {/* first card */}
            {/* second card */}
            <div class="card max-sm:w-5/6" style={{ backgroundImage: `url(${text})`, backgroundSize:`cover`, height:`100% !important`}}>
            <p className='heading'>Text To Speech</p>
            <div class="card__content">
            <p class="card__title">Text To Speech</p>
            <p class="card__description">–Text To Speech app is an helpful application by which user’s can converts text into a speech</p>
            <p class="card__description">–Built using HTML,CSS,JavaScript</p>
            <p class="card__description mt-10">
            <a href="https://github.com/MOHAMMADSHEHBAZ/Text-To-Speech.git" target='_blank'>
            <button
            type="button"
            class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
            GitHub
            </button></a>
            </p>
            </div>
            </div>
            {/* third card */}
        </div>
        </div>
        </section>    
        </>
    )
}
export default Projects