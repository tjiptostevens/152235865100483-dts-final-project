import { db } from '../config/firebase'
import { collection, getDocs } from 'firebase/firestore'

const useGetAllDoc = async (tableName) => {
  const dataRef = await getDocs(collection(db, tableName))
  let data = []
  dataRef.forEach((doc) => {
    let y = doc.data()
    let z = { id: doc.id, data: y }
    data.push(z)
    return data
  })

  return data, dataRef // eslint-disable-line
}

export default useGetAllDoc
