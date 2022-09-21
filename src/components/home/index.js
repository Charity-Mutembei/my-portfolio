import './index.scss'
import Logo from './logo'
// import AnimatedLetters from './../AnimatedLetters'
// import {useState} from 'react';

const Home = () => {
    // const [letterClass, setLetterClass] = useState('text-animate')
    // const [nameArray] = ['c', 'h', 'a', 'r', 'i', 't', 'y']
    // const jobArray = ['f', 'u', 'l', 'l', 's', 't', 'a', 'c', 'k', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br></br> I'M <br></br>
                Charity
                <br></br>A Full Stack Developer</h1>

                <h2>Python / TypeScript / JavaScript / HTML / CSS </h2>

                <a href="/contacts">
                    <h3 className="flat-button"> Explore my portfolio <i class="fa fa-compass" aria-hidden="true"></i> </h3>
                </a>
            </div>
            <Logo/>
        </div>
    );
}


export default Home 