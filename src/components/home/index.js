import './index.scss'
import Navbar from '../Navbar'
import Introduction from '../FirstPage'
import About from '../SecondPage'

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
            <div className="Aboutsection">
                <About/>
            </div>

            </div>
           

           
        </div>

        </>
    )
}
export default Home