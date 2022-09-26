import './index.scss'
import Navbar from '../Navbar'
import Introduction from '../FirstPage'
import About from '../SecondPage'
import Project from '../ThirdPage'
import Contacts from '../Contacts'



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
                
                <span class="link__text"><strong>ABOUT ME</strong></span>
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
                
                <span class="link__text"><strong>PROJECTS</strong></span>
                </a>
            </div>
            <div className="Projectsection" id="Projectsection">
                <Project/>
            </div>
            <div className="checkbelow">
            <a class="link" href="./#Contactstsection">
                <span class="link__arrow">
                    <span></span>
                    <span></span>
                </span>
                <span class="link__line"></span>
                
                <span class="link__text"><strong>CONTACTS</strong></span>
                </a>
            </div>
            <div className="Contactssection" id="Contactstsection">
                <Contacts/>
            </div>

            </div>
           

           
        </div>

        </>
    )
}
export default Home