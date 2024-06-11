import html from './images/html.png'
import css from './images/css-3.png'
import mysql from './images/mysql.png'
import js from './images/js.png'
import ibm from './images/ibm.png'
import web from './images/web.png'
function Certificate(){
    return(
    <>
    <section class="mx-auto w-full max-w-7xl px-4 py-0 education">
        <div class="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
        <h2 class="text-3xl font-bold mt-4">Certificates</h2>      
        </div>
        </div>
        <div className='border-2 mt-5 bg-white rounded-2xl'>
        <div className="flex flex-row justify-center items-center max-sm:flex-col">
        {/* first card */}
        <div class="cookieCard rounded-xl max-sm:w-64">
        <p class="cookieHeading">
        <img src={html} alt="" style={{width:`100px`}}/>    
        </p>
        <p class="cookieDescription">HTML from SoloLearn</p>
        <button class="acceptButton">
        <a href="https://www.sololearn.com/Certificate/1014-23017573/pdf/" className='hover:animate-pulse' target='-blank'>See credentials</a>
        </button>
        </div>
        {/* first card */}
        {/* second card */}
        <div class="cookieCard rounded-xl max-sm:w-64">
        <p class="cookieHeading">
        <img src={css} alt="" style={{width:`100px`}}/>     
        </p>
        <p class="cookieDescription">HackerRank CSS Certification</p>
        <button class="acceptButton">
        <a href="https://www.hackerrank.com/certificates/8f764105f21d" className='hover:animate-pulse' target='-blank'>See credentials</a>
        </button>
        </div>
        {/* second card */}
        </div>
        <div className="flex flex-row justify-center items-center max-sm:flex-col">
        {/* first card */}
        <div class="cookieCard rounded-xl max-sm:w-64">
        <p class="cookieHeading">
        <img src={js} alt="" style={{width:`100px`}}/>    
        </p>
        <p class="cookieDescription">JavaScript Programming from GreatLerning</p>
        <button class="acceptButton">
        <a href="https://verify.mygreatlearning.com/verify/DXZETUXH" className='hover:animate-pulse' target='-blank'>See credentials</a>
        </button>
        </div>
        {/* first card */}
        {/* second card */}
        <div class="cookieCard rounded-xl max-sm:w-64">
        <p class="cookieHeading">
        <img src={web} alt="" style={{width:`100px`}}/>     
        </p>
        <p class="cookieDescription">Web Development Bootcamp From Udemy</p>
        <button class="acceptButton">
        <a href="https://www.udemy.com/certificate/UC-26889b35-77ad-4107-8a10-3f1d26c12ded/" className='hover:animate-pulse' target='-blank'>See credentials</a>
        </button>
        </div>
        {/* second card */}
        </div>
        <div className="flex flex-row justify-center items-center max-sm:flex-col">
        {/* first card */}
        <div class="cookieCard rounded-xl max-sm:w-64">
        <p class="cookieHeading">
        <img src={mysql} alt="" style={{width:`100px`}}/>    
        </p>
        <p class="cookieDescription">MySQL from GreatLerning</p>
        <button class="acceptButton">
        <a href="https://verify.mygreatlearning.com/verify/BEQKPHPV" className='hover:animate-pulse' target='-blank'>See credentials</a>
        </button>
        </div>
        {/* first card */}
        {/* second card */}
        <div class="cookieCard rounded-xl max-sm:w-64">
        <p class="cookieHeading">
        <img src={ibm} alt="" style={{width:`100px`}}/>     
        </p>
        <p class="cookieDescription">Web Development Fundamentals, on IBM SkillsBulid</p>
        <button class="acceptButton">
        <a href="https://www.credly.com/badges/311c22c9-6eb4-4584-9a79-8c99fcb0b08c/print" className='hover:animate-pulse' target='-blank'>See credentials</a>
        </button>
        </div>
        {/* second card */}
        </div>
        </div>
        <div className='py-2'></div>
    </section>  
    </>
    )
}
export default Certificate;