
import Education from './Education.jsx';
import Experience from './Experience.jsx';
import About from './about.jsx'
import Certificate from './certificates.jsx';
import Footer from './footer.jsx';
import Projects from './projects.jsx';
import Skills from './skills.jsx';
import './style.css'
function Maincompo(){
    return (
    <>
        <div className="flex justify-center border-2">
        <div className="bg-white width mt-5 rounded-md shadow-2xl">
            <About/>
            <Skills/>
            <Education/>
            <Experience/>
            <Projects/>
            <Certificate/>
            <Footer/>
        </div>
        </div>
        <div className='py-2'></div>
    </>       
    )
}
export default Maincompo;