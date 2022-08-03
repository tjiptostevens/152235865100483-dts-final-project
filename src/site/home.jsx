import React from 'react'
import Body from './body'
import Hero from './hero'
import MapLocation from './mapLocation'
import MapsApi from './mapsApi'

const Home = () => {
  return (
    <>
      <Hero />
      <Body />
      <MapsApi />
      <MapLocation />
    </>
  )
}

export default Home
