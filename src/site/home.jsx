import React from 'react'
import { auth } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Body from './body'
import Hero from './hero'
import MapsApi from './mapsApi'

const Home = () => {
  const [user] = useAuthState(auth)
  return (
    <>
      {user ? '' : <Hero />}
      <Body />
      <MapsApi />
      {/* <MapLocation /> */}
    </>
  )
}

export default Home
