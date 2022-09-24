import './App.scss';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/layout';
import Home from './components/home';
import About from './components/About';
import Projects from './components/Projects';
import Share from './components/Share';
import Document from './components/documents';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} />
      <Route index element={<Home/>}/>
      <Route index element={<Share/>}/>
      <Route path="/Document" element={<Document/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Projects" element={<Projects/>}/>
    </Routes>


  )
}

export default App
