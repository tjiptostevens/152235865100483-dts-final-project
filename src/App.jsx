import './App.css'
// import { auth } from './config/firebase'
// import { useAuthState } from 'react-firebase-hooks/auth'
import Navbar from './site/navbar'
import { Routes, Route } from 'react-router-dom'
import Login from './site/login'
import Home from './site/home'
import './assets/css/modal.css'
import Footer from './site/footer'
import About from './site/about'
import Contact from './site/contact'

function App() {
  // const [user] = useAuthState(auth)
  return (
    <>
      {/* {console.log(user)} */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
