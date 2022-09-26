import './index.scss'
import AuthPage from './../../assets/PROJECTS/PROJECT1/AUTH.PNG'
import AuthPageAfter from './../../assets/PROJECTS/PROJECT1/After-Auth1.PNG'
import AfterPageAfter2 from './../../assets/PROJECTS/PROJECT1/After-Auth2.PNG'

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
            </div>
        </div>
        </>
    )
}
export default Project