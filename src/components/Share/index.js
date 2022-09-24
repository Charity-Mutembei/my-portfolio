import './index.scss'
// import YoutubeLogo from './../../assets/About/17+ Logo Youtube Png Transparente.jfif'
// import SpotifyLogo from './../../assets/About/Spotify.jfif'
// import PodcastLogo from './../../assets/About/Apple Podcasts Subscriptions Launching on June 15.jfif'
const Share = () => {
    return (
    <div class="container1" className="cardSection">
  <div class="row">
    <div class="col">
    <div className="Spotify">
             <div class="card bg-dark text-white">
                 {/* <img src={SpotifyLogo} class="card-img" alt="..."/> */}
                 <div class="card-img-overlay">
                     <h5 class="card-title">Card title</h5>
                     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                     <p class="card-text">Last updated 3 mins ago</p>
                 </div>
                 </div>
             </div>            
    </div>
    <div class="col">
    <div className="Youtube">
             <div class="card bg-danger text-white">
                 {/* <img src={YoutubeLogo} class="card-img" alt="..."/> */}
                 <div class="card-img-overlay">
                     <h5 class="card-title">Card title</h5>
                     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                     <p class="card-text">Last updated 3 mins ago</p>
                 </div>
                 </div>
             </div>      
    </div>
    <div class="col">
    <div className="Youtube">
             {/* <div class="card bg-dark text-white">
                 <img src={PodcastLogo} class="card-img" alt="..."/>
                 <div class="card-img-overlay">
                     <h5 class="card-title">Card title</h5>
                     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                     <p class="card-text">Last updated 3 mins ago</p>
                 </div>
                 </div> */}
             </div>
    </div>
  </div>
</div>
    )
}

export default Share