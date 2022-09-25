import './index.scss'
import Navbar from '../Navbar'
import Introduction from '../FirstPage'

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

            </div>
           

           
        </div>

        </>
    )
}
export default Home