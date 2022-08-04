import React, { useState } from 'react'
import { db } from '../config/firebase'
import { collection, doc, updateDoc } from 'firebase/firestore'

const MitraDetail = (props) => {
  const [data, setData] = useState(props.data.data)
  const [read, setRead] = useState(true)
  const [vis, setVis] = useState({ modal: true, message: '' })
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleUpdate = async (e) => {
    e.preventDefault()
    setRead(true)
    setVis({ ...vis, modal: false, message: 'Data sudah di update.' })
    let col = collection(db, 'mitras')
    const dataRef = doc(col, props.data.id)
    try {
      await updateDoc(dataRef, data)
    } catch (err) {
      console.log(err)
      setRead(false)
      setVis({ ...vis, modal: false, message: 'Terjadi kesalahan.' + err })
    }

    setRead(true)
    setVis({ ...vis, modal: false, message: 'Data sudah di update.' })
  }
  return (
    <>
      {vis.modal ? (
        ''
      ) : (
        <div className="modal-window">
          <div className="col-md-6 col-11" style={{ borderRadius: '5px' }}>
            <div className="modal-title">
              <div>
                <h1>Message</h1>
              </div>
              <div
                style={{ cursor: 'pointer' }}
                onClick={() => setVis({ ...vis, message: '', modal: true })}
              >
                <i className="bi bi-x-square"></i>
              </div>
            </div>
            <hr />
            <div
              className="w-100 justify-content-around"
              style={{
                textAlign: 'justify',
                height: 'auto',
              }}
            >
              <div>
                <p>{vis.message}</p>
                <button
                  className="btn btn-light"
                  onClick={() => setVis({ ...vis, message: '', modal: true })}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
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
                {read ? (
                  <button
                    className="btn btn-light"
                    onClick={(e) => {
                      e.preventDefault()
                      setRead(false)
                    }}
                  >
                    EDIT
                  </button>
                ) : (
                  <button className="btn btn-light" onClick={handleUpdate}>
                    SIMPAN
                  </button>
                )}
              </form>
            </div>
            <div className="col-md-6">
              <h3>Servis</h3>
              {data.service.map((d) => (
                <div>{d}</div>
              ))}
              <h3>Kendaraan</h3>
              {data.vehicle.map((d) => (
                <i
                  className={`fa-solid fa-${d}`}
                  style={{ fontSize: '24px', padding: '5px' }}
                ></i>
              ))}
              <h3>Harga</h3>
              {data.price.map((d) => (
                <>
                  <div>
                    {d.name} - {d.price}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MitraDetail
