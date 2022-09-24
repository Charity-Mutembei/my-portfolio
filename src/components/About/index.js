import './index.scss'
import Logo from './../home/logo'
import Sidebar from './../sidebar'
// import Document from '../documents'
import YoutubeLogo from './../../assets/About/youtube-6362801.png'
import SpotifyLogo from './../../assets/About/spotify-6862049.png'
import PodcastLogo from './../../assets/About/mic-5574483.png'
// import Share from './../Share'
const bg = document.getElementsByClassName('Wrapper');
window.addEventListener('scroll', function(){
    bg.style.backgroundSize = 160 - +window.pageYOffset/12+ '%'; 
})
const About = () => {
    return (
    <div className="First">
        <Sidebar/>
        <div class="row">
            <div class="col-6" className="pic">
                <Logo/> 
                             
            </div>
            <div class="col-6" className="Text">
            <h3 className="content">
                <ul >
                    <li>I am a born and raised Kenyan </li>
                    <li> I recently graduated from Moringa School where as a remote learner aiming to become a web developer</li>
                    <li>As a student , I have created websites using technologies such as CSS, HTML5, JavaScript, Python, and TypeScript</li>
                    <li>I have also collaborated with other students under guardianship of a technical mentor</li>
                    <li>Before joining Moringa School, I had been pursuing a bachelor's degree in Education but deffered.</li>
                    <li>To afford my basic needs, I aided in the creation of web applications to my fellow computer science school mates</li>
                    <li>This interaction with these computer science students marked the beginning of my <br/> software development curiosity</li>

                </ul>
            </h3>
            <p className="me">
                    <h3 className="flat-button"> Below is something I listen to <i class="fas fa-level-down"></i></h3>
                </p>
                

            
            </div>
           
        </div>
        <div>
        <div class="container1" className="cardSection">
  <div class="row" >
    <div class="col" id="spotify">
    <div className="Spotify">
             <div class="card text-white" id="spot">
                 <img src={SpotifyLogo} class="card-img" id="nin" alt="..."/>
                 <div class="card-img-overlay" id="listen">
                     <p class="card-text">
                     <a href="/">
                        <i class="fas fa-play" id="butt"></i>
                        </a>
                     </p>
                 </div>
                 </div>
             </div>            
    </div>
    <div class="col" id="spotify1">
    <div className="Youtube">
             <div class="card text-white" id="backk">
                 <img src={YoutubeLogo} class="card-img" alt="..."/>
                 <div class="card-img-overlay" id="listen">
                     <p class="card-text">
                     <a href="/">
                        <i class="fas fa-play" id="butt"></i>
                        </a>
                     </p>
                    
                 </div>
                 </div>
             </div>      
    </div>
    <div class="col">
    <div className="Youtube">
             <div class="card text-white" id="purple">
                 <img src={PodcastLogo} class="card-img" id="purple1" alt="..."/>
                 <div class="card-img-overlay" id="listen">
                     <p class="card-text">
                        <a href="/">
                        <i class="fas fa-play" id="butt"></i>
                        </a>
                     </p>
                 </div>
                 </div>
             </div>
    </div>
  </div>
</div>
        </div>
       
        <div class="row" id="cvic">
            {/* cv parts  */}
            <div class="col-4">
            <h1 className="heading">Background Information</h1>

            </div>
            <div class="col-8">
                     
            </div>
        </div>

    </div>
       
    )
}

export default About 