import './App.css'
import { auth } from './config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import ChatRoom from './chat/chatRoom'
import SignIn from './site/signIn'
import Navbar from './site/navbar'
import { Routes, Route } from 'react-router-dom'
import Login from './site/login'
import Register from './site/register'

function App() {
  const [user] = useAuthState(auth)
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <ChatRoom /> : <SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
