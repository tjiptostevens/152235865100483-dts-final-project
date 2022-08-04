import React, { useState } from 'react'
import '../assets/css/mitra.css'

const MitraDetail = (props) => {
  const [data, setData] = useState(props.data)
  const [read, setRead] = useState(true)
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  return (
    <>
      {JSON.stringify(props.data)}
      <div className="w-100">
        <div className="mitra-container">
          <div>
            <h1>MITRA DASHBOARD</h1>
          </div>
          <div className="col-md-12 mitra-detail">
            <div className="col-md-6">
              <h3>Detail</h3>
              <form style={{ padding: '15px' }}>
                <label className="form-label">Nama</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  readOnly={read}
                  disabled={read}
                />
                <label className="form-label">Handphone</label>
                <input
                  className="form-control"
                  type="text"
                  name="mobile"
                  value={data.mobile}
                  onChange={handleChange}
                  readOnly={read}
                  disabled={read}
                />
                <label className="form-label">Alamat</label>
                <input
                  className="form-control"
                  type="text"
                  name="address"
                  value={data.address}
                  onChange={handleChange}
                  readOnly={read}
                  disabled={read}
                />
                <label className="form-label">Koordinat</label>
                <input
                  className="form-control"
                  type="text"
                  name="latlng"
                  value={data.latlng}
                  onChange={handleChange}
                  readOnly={read}
                  disabled={read}
                />
                <button
                  className="btn btn-light"
                  onClick={() => setRead(false)}
                >
                  EDIT
                </button>
              </form>
            </div>
            <div className="col-md-6">
              <h3>Servis</h3>
              {data.service.map((d) => d)}
              <h3>Kendaraan</h3>
              {data.vehicle.map((d) => d)}
              <h3>Harga</h3>
              {data.price.map((d) => d.name)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MitraDetail
