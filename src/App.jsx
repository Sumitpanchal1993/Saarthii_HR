
import './App.css'
import Navbar from './Components/Navbar'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Routes} from 'react-router'
import Home from './Pages/Home'
import About from './Pages/About'
import Marketing from './Pages/Marketing'
import The_Organisation from './Pages/The_Organisation'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'

function App() {

  return (
    <>
     <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/marketing" element={<Marketing />} />
          {/* <Route path="/organisation" element={<The_Organisation />} /> */}
          <Route path="/contact_us" element={<Contact />} />
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
   
      </Router>  
    </>
  )
}

export default App
