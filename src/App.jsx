import './App.css'
import { auth } from './config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import ChatRoom from './chat/chatRoom'
import SignIn from './site/signIn'
import Navbar from './site/navbar'

function App() {
  const [user] = useAuthState(auth)
  return (
    <>
      {console.log(process.env)}
      <Navbar />
      <div className="App">{user ? <ChatRoom /> : <SignIn />}</div>
    </>
  )
}

export default App
