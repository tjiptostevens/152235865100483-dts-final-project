import React, { useState } from 'react'
import { CalculateRoute } from '../config/gMaps'
import BodyCardDetail from './bodyCardDetail'
import Modal from './modal'
import useWindow from '../custom/useWindow'
const BodyCard = (props) => {
  const { width } = useWindow()
  const [vis, setVis] = useState({ modal: true })
  const { direction, distance, duration } = CalculateRoute(props.data.latlng)
  return (
    <>
      <Modal
        title={props.data.name}
        data={props.data}
        modal={vis.modal}
        element={
          <BodyCardDetail
            data={props.data}
            handleClose={() => setVis({ ...vis, modal: !vis.modal })}
          />
        }
        handleClose={() => setVis({ ...vis, modal: !vis.modal })}
      />
      {console.log(direction, distance, duration)}
      <div
        className={width > 450 ? `list-card-container` : 'col-12 '}
        onClick={() => setVis({ ...vis, modal: !vis.modal })}
      >
        <div className="list-map"></div>
        <div className="list-card">
          <h4>{props.data.name}</h4>
          <hr />
          <p>Jarak : {distance}</p>
          <p>Waktu : {duration}</p>
        </div>
      </div>
    </>
  )
}

export default BodyCard
