import './App.scss';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route index element={<Navbar/>} />
    </Routes>


  )
}

export default App
