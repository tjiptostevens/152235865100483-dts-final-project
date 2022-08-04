import React from 'react'
import { CalculateRoute } from '../config/gMaps'
const BodyCard = (props) => {
  const { distance, duration } = CalculateRoute(props.data.latlng)
  return (
    <>
      <div className="list-map"></div>
      <div className="list-card">
        <h4>{props.data.name}</h4>
        <hr />
        <p>Jarak : {distance}</p>
        <p>Waktu : {duration}</p>
      </div>
    </>
  )
}

export default BodyCard
