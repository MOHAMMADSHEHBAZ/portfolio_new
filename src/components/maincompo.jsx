
import Break from './Break.jsx';
import About from './about.jsx'
import './style.css'
function Maincompo(){
    return (
    <>
        <div className="flex justify-center border-2">
        <div className="bg-white width mt-5 rounded-md shadow-2xl">
            <About/>
            <Break/>
        </div>
        </div>
        <div className='py-2'></div>
    </>       
    )
}
export default Maincompo;