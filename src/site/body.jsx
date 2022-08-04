import React, { useState, useEffect } from 'react'
import '../assets/css/body.css'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '../config/firebase'
import useGetAllDoc from '../custom/useGetAllDoc'

const Body = () => {
  // const data = useGetAllDoc('messages')
  const [data, setData] = useState('')
  useEffect(() => {
    const q = query(collection(db, 'mitras'), orderBy('created', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      setData(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })),
      )
    })
  }, [])
  return (
    <>
      {console.log(data)}
      <section className="body-container">
        <div className="w-100"></div>
      </section>
    </>
  )
}

export default Body
