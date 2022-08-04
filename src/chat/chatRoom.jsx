import React, { useRef, useState } from 'react'
import { auth } from '../config/firebase'
import { addDoc, serverTimestamp } from 'firebase/firestore'
import ChatMessage from './chatMessage'
import SignOut from '../site/signOut'
import useGetDoc from '../custom/useGetDoc'

const ChatRoom = () => {
  const { data, dataRef } = useGetDoc('messages', 'createdAt', 25)

  const [formValue, setFormValue] = useState('')

  const dummy = useRef()

  const sendMessage = async (e) => {
    //   write value to firestore
    e.preventDefault()
    const { uid, photoURL } = auth.currentUser
    try {
      // create new document to firestore
      await addDoc(dataRef, {
        id: +new Date(),
        text: formValue,
        createdAt: serverTimestamp(),
        uid,
        photoURL,
      })
      setFormValue('')
    } catch (error) {
      console.error(error)
    }
    dummy.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* {console.log('data', data)}
      {console.log('ref', dataRef)} */}
      <SignOut />
      <div>
        {data && data.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
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
