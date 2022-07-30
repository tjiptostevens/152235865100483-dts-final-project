import './App.css'
import { auth } from './config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import ChatRoom from './chat/chatRoom'
import SignIn from './site/signIn'

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      {console.log('user', user)}
      {user ? <ChatRoom /> : <SignIn />}
    </div>
  )
}

export default App
