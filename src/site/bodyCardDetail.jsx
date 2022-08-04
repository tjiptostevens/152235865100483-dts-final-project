import React from 'react'
import MapsApi from './mapsApi'

const BodyCardDetail = (props) => {
  return (
    <>
      <MapsApi />
      {console.log(props)}
      <div className="w-100" style={{ height: '25px' }}></div>

      <div className="row col-md-12" style={{ margin: '0', padding: '0' }}>
        <div className="col-md-6">
          <h3>{props.data.name}</h3>
          <p>{props.data.mobile}</p>
          <br />
          <p>
            Alamat : <br />
            {props.data.address}
          </p>
        </div>
        <div className="col-md-6">
          <h3>Servis</h3>
          {props.data.service.map((d) => (
            <div>{d}</div>
          ))}
          <h3>Kendaraan</h3>
          {props.data.vehicle.map((d) => (
            <i
              className={`fa-solid fa-${d}`}
              style={{ fontSize: '24px', padding: '5px' }}
            ></i>
          ))}
          <h3>Harga</h3>
          {props.data.price.map((d) => (
            <>
              <div>
                {d.name} - {d.price}
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="w-100" style={{ height: '25px' }}></div>
      <hr />
      <div className="w-100" style={{ height: '25px' }}></div>
      <button className="btn btn-light" onClick={(e) => props.handleClose()}>
        TUTUP
      </button>
    </>
  )
}

export default BodyCardDetail
