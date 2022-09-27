import './index.scss'
import AuthPage from './../../assets/PROJECTS/PROJECT1/AUTH.PNG'
import AuthPageAfter from './../../assets/PROJECTS/PROJECT1/After-Auth1.PNG'
import AfterPageAfter2 from './../../assets/PROJECTS/PROJECT1/After-Auth2.PNG'
import FirstPage from './../../assets/PROJECTS/PROJECT2/FirstPage.PNG'
import SecondtPage from './../../assets/PROJECTS/PROJECT2/SecondPage.PNG'
import ThirdPage from './../../assets/PROJECTS/PROJECT2/ThirdPage.PNG'
import SupportPage from './../../assets/PROJECTS/PROJECT3/SuportPage.PNG'
import LandingPage from './../../assets/PROJECTS/PROJECT3/LandingPage.PNG'
import AbortionPage from './../../assets/PROJECTS/PROJECT3/AbortionPage.PNG'
import FrontPage from './../../assets/PROJECTS/PROJECT4/FrontPage.PNG'
import MiddlePage from './../../assets/PROJECTS/PROJECT4/MiddlePage.PNG'
import BackPage from './../../assets/PROJECTS/PROJECT4/BackPage.PNG'

const Project = () => {
    return (
        <>
        <div id="Poject">
        <div class="container1">
       
            <div className="heading">
                <h1 className="heading1">PROJECTS</h1>
            </div>
           
            <div class="row" >
                <div class="col-5" id="parent">
                <img src={AfterPageAfter2} alt="...." id="image"/>               
                <img src={AuthPageAfter} alt="...." id="image1"/>                   
                <img src={AuthPage} alt="...." id="image2"/>

                </div>
                <div class="col-7" id="rightSide" >
                
                    <div className="projectTitle">
                        <a href="https://comtwitter.herokuapp.com/. ">
                        <h1 className="projectName"> <span class="number">1</span> Comm-Twitter <i class="fas fa-location-arrow"></i></h1>
                        </a>
                    </div>
                    <div className="projectDescription">
                        <p>
                        This a quick application where the user can find businesses within
                         their area of residence and is able to pass in information with others
                          user through sending posts/chats
                        </p>
                    </div>
                    <div className="languages">
                         <div className="badges">
                    
                            <div class="badge yellow" id="yellow">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="216px" height="232px" viewBox="0 0 216 232">
                                    <path fill="#000000" d="M207,0C171.827,0.001,43.875,0.004,9.003,0c-5.619-0.001-9,3.514-9,9c0,28.23-0.006,151.375,0,169    c0.005,13.875,94.499,54,107.999,54S216,191.57,216,178V9C216,3.298,212.732,0,207,0z"/>
                            </svg>
                            <p class="title">LANGUAGES <br/> USED</p>
                            <p class="subtitle">
                                Python <br/> JavaScript <br/> HTML <br/> CSS
                            </p>
                            </div>
                            
                            </div>                        
                    </div>
                </div>
            </div>
            {/* second project showcase  */}           
            <div class="row" >
                <div class="col-5" id="parent">
                <img src={ThirdPage} alt="...." id="image"/>               
                <img src={SecondtPage} alt="...." id="image1"/>                   
                <img src={FirstPage} alt="...." id="image2"/>

                </div>
                <div class="col-7" id="rightSide" >
                
                    <div className="projectTitle">
                        <a href="https://charity-mutembei.github.io/ANGULAR2-2/">
                        <h1 className="projectName"> <span class="number">2</span> GitFind <i class="fas fa-location-arrow"></i></h1>
                        </a>
                    </div>
                    <div className="projectDescription">
                        <p>
                        This is an application meant to be a search engine for git profiles 
                        and repositories found. A user is able to search for a profile or 
                        the repositories of the GitHub account filled in the search bar.
                        </p>
                    </div>
                    <div className="languages">
                         <div className="badges">
                    
                            <div class="badge blue" id="yellow">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="216px" height="232px" viewBox="0 0 216 232">
                                    <path fill="#000000" d="M207,0C171.827,0.001,43.875,0.004,9.003,0c-5.619-0.001-9,3.514-9,9c0,28.23-0.006,151.375,0,169    c0.005,13.875,94.499,54,107.999,54S216,191.57,216,178V9C216,3.298,212.732,0,207,0z"/>
                            </svg>
                            <p class="title">LANGUAGES <br/> USED</p>
                            <p class="subtitle">
                                Angular <br/> JavaScript <br/> HTML <br/> CSS
                            </p>
                            </div>
                            
                            </div>                        
                    </div>
                </div>
            </div>
            {/* end of second project  */}

            {/* third project  */}          
            <div class="row" >
                <div class="col-5" id="parent">
                <img src={SupportPage} alt="...." id="image"/>               
                <img src={AbortionPage} alt="...." id="image1"/>                   
                <img src={LandingPage} alt="...." id="image2"/>

                </div>
                <div class="col-7" id="rightSide" >
                
                    <div className="projectTitle">
                        <a href="https://charity-bit.github.io/sexucate/">
                        <h1 className="projectName"> <span class="number">3</span> Sexucate <i class="fas fa-location-arrow"></i></h1>
                        </a>
                    </div>
                    <div className="projectDescription">
                        <p>
                        Sexucate is a platform that aims to reduce stigmatization
                         of topics concerning sexual and reproductive health and practices 
                         in young adolescents by providing information to these young 
                         girls and boys on safe sex practices.

                        </p>
                    </div>
                    <div className="languages">
                         <div className="badges">
                    
                            <div class="badge green" id="yellow">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="216px" height="232px" viewBox="0 0 216 232">
                                    <path fill="#000000" d="M207,0C171.827,0.001,43.875,0.004,9.003,0c-5.619-0.001-9,3.514-9,9c0,28.23-0.006,151.375,0,169    c0.005,13.875,94.499,54,107.999,54S216,191.57,216,178V9C216,3.298,212.732,0,207,0z"/>
                            </svg>
                            <p class="title">LANGUAGES <br/> USED</p>
                            <p class="subtitle">
                                Python <br/> JavaScript <br/> HTML <br/> CSS
                            </p>
                            </div>
                            
                            </div>                        
                    </div>
                </div>
            </div>
            {/* end of third project  */}
            {/* start of pag 4 */}
            <div class="row" >
                <div class="col-5" id="parent">
                <img src={BackPage} alt="...." id="image"/>               
                <img src={MiddlePage} alt="...." id="image1"/>                   
                <img src={FrontPage} alt="...." id="image2"/>

                </div>
                <div class="col-7" id="rightSide" >
                
                    <div className="projectTitle">
                       
                        <h1 className="projectName"> <span class="number">4</span>  ELIMISHA KENYA <i class="fas fa-location-arrow"></i></h1>
                        <h6 className="projectName"> Coming Soon .... </h6>
                        
              
                    </div>
                    <div className="projectDescription">
                        <p>
                        A personal project aiming to aid students of the lower grades in being 
                        outcome-focused, solution-based, efficient in planning and organizing
                         their study time as well as goals and objectives. <br/> This initiative is
                         influenced by the challenges faced by all slow learners who have a
                          hard time keeping up with the pace of the school curriculum yet their
                           assessment is inconsiderate of their nature and state when learning

                        </p>
                    </div>
                    <div className="languages">
                         <div className="badges">
                    
                            <div class="badge red" id="yellow">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="216px" height="232px" viewBox="0 0 216 232">
                                    <path fill="#000000" d="M207,0C171.827,0.001,43.875,0.004,9.003,0c-5.619-0.001-9,3.514-9,9c0,28.23-0.006,151.375,0,169    c0.005,13.875,94.499,54,107.999,54S216,191.57,216,178V9C216,3.298,212.732,0,207,0z"/>
                            </svg>
                            <p class="title">LANGUAGES <br/> USED</p>
                            <p class="subtitle">
                                Python <br/> JavaScript <br/> HTML <br/> CSS / SCSS
                            </p>
                            </div>
                            
                            </div>                        
                    </div>
                </div>
            </div>
            {/* end of page 4 */}
            </div>
        </div>
        </>
    )
}
export default Project