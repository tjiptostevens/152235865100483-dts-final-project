import { db } from '../config/firebase'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'

const useGetAllDoc = (tableName) => {
  const [data, setData] = useState('')

  /* function to get all tasks from firestore in realtime */
  const q = query(collection(db, tableName), orderBy('createdAt', 'desc'))

  useEffect(() => {
    setTimeout(() => {
      onSnapshot(q, (querySnapshot) => {
        setData(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          })),
        )
      })
    }, 500)
  }, [q])
  return data
}

export default useGetAllDoc
