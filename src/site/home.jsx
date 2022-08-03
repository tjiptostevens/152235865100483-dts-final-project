import React from 'react'
import Hero from './hero'
import MapLocation from './mapLocation'
import MapsApi from './mapsApi'

const Home = () => {
  return (
    <>
      <Hero />
      <div>Home</div>
      <MapsApi />
      <MapLocation />
    </>
  )
}

export default Home
