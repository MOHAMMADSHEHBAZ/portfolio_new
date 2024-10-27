import html from './images/html.png'
import css from './images/css-3.png'
import mysql from './images/mysql.png'
import js from './images/js.png'
import ibm from './images/ibm.png'
import web from './images/web.png'
function Certificate(){
    return(
        <>
        <div class="flex flex-col space-y-4 px-4 py-6 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
          <h2 class="text-3xl font-bold">Certificates</h2>      
          </div>
        </div>
        <div className='md:flex items-center justify-center pb-5'>
          <div className='md:grid md:grid-cols-2 md:gap-8'>

            <a href="#" className="block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
            <img src={html} className='max-w-20' alt="" />    
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">HTML from SoloLearn</h5>
            <p>
            <a href="https://www.sololearn.com/Certificate/CT-HOIVRMGT/pdf">
            <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">See Credential</button>   
            </a>
            </p>
            </a>  
            <a href="#" className="block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
            <img src={css} className='max-w-20' alt="" />    
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">HackerRank CSS Certification</h5>
            <p>
            <a href="https://www.hackerrank.com/certificates/8f764105f21d">
            <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">See Credential</button>   
            </a>    
            </p>
            </a>  
            <a href="#" className="block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
            <img src={js} className='max-w-20' alt="" />    
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">JavaScript Programming from GreatLearning</h5>
            <p>
            <a href="https://verify.mygreatlearning.com/verify/DXZETUXH">
            <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">See Credential</button>   
            </a>
            </p>
            </a>  
            <a href="#" className="block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
            <img src={web} className='max-w-20' alt="" />    
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Web Development Bootcamp From Udemys</h5>
            <p>
            <a href="https://www.udemy.com/certificate/UC-26889b35-77ad-4107-8a10-3f1d26c12ded/">
            <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">See Credential</button>   
            </a>
            </p>
            </a>  
            <a href="#" className="block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
            <img src={mysql} className='max-w-20' alt="" />    
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">MySQL from GreatLerning</h5>
            <p>
            <a href="https://verify.mygreatlearning.com/verify/BEQKPHPV">
            <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">See Credential</button>   
            </a>
            </p>
            </a>  
            <a href="#" className="block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
            <img src={ibm} className='max-w-20' alt="" />    
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Web Development Fundamentals, on IBM SkillsBulid</h5>
            <p>
            <a href="https://www.credly.com/badges/311c22c9-6eb4-4584-9a79-8c99fcb0b08c/print">
            <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">See Credential</button>   
            </a>
            </p>
            </a>  
            
          </div>
        </div>
        </>
    )
}
export default Certificate;