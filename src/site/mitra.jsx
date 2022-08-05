import React from 'react'
import { auth } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import useGetOneDoc from '../custom/useGetOneDoc'
import MitraInfo from './mitraInfo'
import MitraDetail from './mitraDetail'
import '../assets/css/mitra.css'

const Mitra = () => {
  const [user] = useAuthState(auth)
  const data = useGetOneDoc('mitras', 'uid', user ? user.uid : 0)
  return (
    <>
      {!user || (user && data.length) === 0 ? <MitraInfo /> : ''}
      {console.log(data)}
      {data.length >= 1 && <MitraDetail data={data[0]} />}
    </>
  )
}

export default Mitra
