import { db } from '../config/firebase'
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'

const useGetAllDoc = async (tableName) => {
  const [data, setData] = useState([])
  //   const dataRef = await getDocs(collection(db, tableName))
  //   let data = []
  //   dataRef.forEach((doc) => {
  //     let y = doc.data()
  //     let z = { id: doc.id, data: y }
  //     data.push(z)
  //     return data
  //   })

  /* function to get all tasks from firestore in realtime */
  useEffect(() => {
    const q = query(collection(db, tableName), orderBy('created', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      setData(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })),
      )
    })
  }, [])
  return data // eslint-disable-line
}

export default useGetAllDoc
