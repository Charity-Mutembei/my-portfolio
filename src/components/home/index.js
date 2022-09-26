import './index.scss'
import Navbar from '../Navbar'
import Introduction from '../FirstPage'
import About from '../SecondPage'
import Project from '../ThirdPage'



const Home = () => {
    return (
        <>
        <div>
            <div className='App'>
            <div className='navsection'>
            <Navbar/>                
            </div>
            <div className='introsection'>
                 <Introduction/>
            </div>
            <div className="checkbelow">
            <a class="link" href="./#Aboutsection">
                <span class="link__arrow">
                    <span></span>
                    <span></span>
                </span>
                <span class="link__line"></span>
                
                <span class="link__text"><strong>Next</strong></span>
                </a>
            </div>
            <div className="Aboutsection" id="Aboutsection">
                <About/>
            </div>
            <div className="checkbelow">
            <a class="link" href="./#Projectsection">
                <span class="link__arrow">
                    <span></span>
                    <span></span>
                </span>
                <span class="link__line"></span>
                
                <span class="link__text"><strong>Next</strong></span>
                </a>
            </div>
            <div className="Projectsection" id="Projectsection">
                <Project/>
            </div>

            </div>
           

           
        </div>

        </>
    )
}
export default Home