import React, { useRef, useState } from 'react'
import { auth, db } from '../config/firebase'
import {
  collection,
  query,
  orderBy,
  limit,
  //   getDocs,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import ChatMessage from './chatMessage'
import SignOut from '../site/signOut'

const ChatRoom = () => {
  const [user] = useAuthState(auth)

  const messagesRef = collection(db, 'messages')
  const q = query(messagesRef, orderBy('createdAt'), limit(25))

  const [messages] = useCollectionData(q, { idField: 'id' })

  const [formValue, setFormValue] = useState('')

  const dummy = useRef()

  const sendMessage = async (e) => {
    //   write value to firestore
    e.preventDefault()
    const { uid, photoURL } = auth.currentUser
    try {
      // create new document to firestore
      const docRef = await addDoc(messagesRef, {
        text: formValue,
        createdAt: serverTimestamp(),
        uid,
        photoURL,
      })
      //   console.log(docRef)
      setFormValue('')
    } catch (error) {
      console.error(error)
    }
    dummy.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <SignOut />
      <div>
        {console.log(messages)}
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={dummy}></div>
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit">🔥</button>
      </form>
    </>
  )
}

export default ChatRoom
