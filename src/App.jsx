import './App.css'
// import { auth } from './config/firebase'
// import { useAuthState } from 'react-firebase-hooks/auth'
import Navbar from './site/navbar'
import { Routes, Route } from 'react-router-dom'
import Login from './site/login'
import Home from './site/home'
import './assets/css/modal.css'
import Footer from './site/footer'

function App() {
  // const [user] = useAuthState(auth)
  return (
    <>
      {/* {console.log(user)} */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/:userType" element={<Login />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
