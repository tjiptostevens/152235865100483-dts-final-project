import { db } from '../config/firebase'
import {
  collection,
  query,
  where,
  // getDocs,
  onSnapshot,
} from 'firebase/firestore'
import { useState, useEffect } from 'react'

const useGetOneDoc = (tableName, fieldName, fieldValue) => {
  const [data, setData] = useState('')
  const q = query(collection(db, tableName), where(fieldName, '==', fieldValue))

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
  })

  return data
}

export default useGetOneDoc
