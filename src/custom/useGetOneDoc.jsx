import { db } from '../config/firebase'
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useState, useEffect } from 'react'

const useGetAllDoc = (tableName, fieldName, fieldValue) => {
  const [data, setData] = useState('')
  const q = query(collection(db, tableName), where(fieldName, '==', fieldValue))
  // const [data] = useCollectionData(q, { idField: 'id' })

  useEffect(() => {
    setTimeout(() => {
      // const q = query(collection(db, tableName), orderBy('created', 'desc'),  where(fieldName, '==', fieldValue))
      onSnapshot(q, (querySnapshot) => {
        setData(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          })),
        )
      })
    }, 500)
  }, [])

  // console.log(data)
  return data
}

export default useGetAllDoc
