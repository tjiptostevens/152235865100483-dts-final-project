import { useJsApiLoader } from '@react-google-maps/api'
import { useState } from 'react'

export const gMapsConfig = {
  API_KEY: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
}

const IsLoaded = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: gMapsConfig.API_KEY,
    libraries: ['places'],
  })
  return isLoaded
}

const getPosition = () => {
  const success = (position) => {
    let myLat = position.coords.latitude
    let myLong = position.coords.longitude
    let coords = {
      lat: myLat,
      lng: myLong,
    }
    console.log('current pos', coords)
    return coords
  }
  const failure = (er) => {
    console.log(er)
  }
  let x = navigator.geolocation
  x.getCurrentPosition(success, failure)
}
const CalculateRoute = async (destinationRef) => {
  const [direction, setDirection] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
  let originRef = getPosition()
  if (originRef === '' || destinationRef === '') {
    return
  }
  const directionService = new window.google.maps.DirectionsService()
  const results = await directionService.route({
    origin: originRef,
    destination: destinationRef,
    travelMode: window.google.maps.TravelMode.WALKING,
  })
  setDirection(results)
  setDistance(results.routes[0].legs[0].distance.text)
  setDuration(results.routes[0].legs[0].duration.text)
  return { direction, distance, duration }
}
export { IsLoaded, CalculateRoute }
