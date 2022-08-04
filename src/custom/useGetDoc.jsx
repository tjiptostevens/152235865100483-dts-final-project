// import { useState } from 'react'
import { db } from '../config/firebase'
import { collection, query, orderBy, limit } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const useGetDoc = (tableName, orderField, limitData) => {
  // const [error, setError] = useState(null)

  const dataRef = collection(db, tableName)
  const q = query(dataRef, orderBy(orderField), limit(limitData))
  const [data] = useCollectionData(q, { idField: 'id' })
  console.log(data)

  return { data, dataRef }
}

export default useGetDoc
