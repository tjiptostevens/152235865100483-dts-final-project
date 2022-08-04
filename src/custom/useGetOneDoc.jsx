import { db } from '../config/firebase'
import { collection, query, where } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'
// import { useState } from 'react'

const useGetAllDoc = (tableName, fieldName, fieldValue) => {
  // const [da, setDa] = useState('')
  const q = query(collection(db, tableName), where(fieldName, '==', fieldValue))
  const [data] = useCollectionData(q, { idField: 'id' })

  // setTimeout(async () => {
  //   let data = []
  //   try {
  //     const dataRef = await getDocs(q)
  //     dataRef.forEach((doc) => {
  //       let y = doc.data()
  //       let z = { id: doc.id, ...y }
  //       data.push(z)
  //     })
  //     console.log(data)
  //     // return setDa(() => data[0])
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }, 500)
  return data
}

export default useGetAllDoc
