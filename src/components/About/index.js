import './index.scss'
import Logo from './../home/logo'
import Sidebar from './../sidebar'
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
            <h1 className="metalk"> 
                <br/>
                I presume you want to know more about me!
                <br/> (Your time checking my portfolio is appreciated)</h1>
            <p className="Text2">
                I am a 23 year-old young woman  pursuing a career as a Fullstack Web Developer.
                <br/> Don't worry! You can take my word for it. <br/>
                I design and build web applications using languaguages such as <br/>
                 Python, TypeScript, JavaScript, HTML and CSS. 
            </p>
            <a href="/Projects" className="me">
                    <h3 className="flat-button"> See my Projects <i class="fa fa-compass" aria-hidden="true"></i> </h3>
                </a>
                

            
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
            <div class="col-6">
            <h1 className="heading">Background</h1>
            </div>
            <div class="col-6">
            <h1 className="content">Lorem ipsum dolor sit amet,
             consectetur adipiscing elit. Morbi ac mauris mauris.
              Quisque fringilla magna consequat nulla egestas
               sagittis. Interdum et malesuada fames ac ante ipsum
               primis in faucibus. Donec aliquet blandit velit, non
                facilisis nibh placerat elementum. Duis consectetur 
                nulla ullamcorper, tristique libero non, dictum metus.
                 Nunc quis facilisis nibh, id consectetur est. Sed sed
                  consequat tortor. Donec vel est eu metus sollicitudin
                   auctor. Integer eget tincidunt quam, placerat
                    scelerisque neque. Pellentesque scelerisque
                     rutrum dui at feugiat. Fusce euismod risus 
                     quis lectus tempus mattis. Donec bibendum 
                     dignissim quam at lacinia.</h1>
            </div>
        </div>

    </div>
       
    )
}

export default About 