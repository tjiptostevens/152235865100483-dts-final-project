import React, { useState, useCallback } from 'react'
import { gMapsConfig } from '../config/gMaps'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

const center = {
  lat: -6.9698067,
  lng: 110.3895378,
}
const containerStyle = {
  width: '300px',
  height: '300px',
}

const MapsApi = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: gMapsConfig.API_KEY,
  })
  const [mapRef, setMapRef] = useState(null)
  const onLoad = useCallback((map) => {
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

    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)
    setMapRef(map)
  }, [])
  const centerChanged = () => {
    if (mapRef) {
      const newCenter = mapRef.getCenter()
      //   console.log(newCenter)
      setMapRef(newCenter)
    }
  }
  const onUnmount = useCallback((map) => {
    setMapRef(null)
  }, [])
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={3}
      onLoad={onLoad}
      onCenterChanged={centerChanged}
      onUnmount={onUnmount}
    >
      <></>
    </GoogleMap>
  ) : (
    <></>
  )
}

export default MapsApi
