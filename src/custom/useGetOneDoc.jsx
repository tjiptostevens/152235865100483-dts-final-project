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

  useEffect(() => {
    // setTimeout(() => {
    const q = query(
      collection(db, tableName),
      where(fieldName, '==', fieldValue),
    )

    const x = onSnapshot(q, (querySnapshot) => {
      setData(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })),
      )
    })
    return () => x()
    // }, 500)
    // eslint-disable-next-line
  }, [])
  return data
}

export default useGetOneDoc
