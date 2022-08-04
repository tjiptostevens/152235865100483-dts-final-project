import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import Modal from './modal'

const MitraForm = (props) => {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)
  const [data, setData] = useState({
    uid: user.uid,
    name: '',
    mobile: '',
    address: '',
    latlng: '',
    createdAt: serverTimestamp(),
    service: ['online', 'onsite'],
    vehicle: ['car-side', 'truck', 'motorcycle'],
    price: [
      { name: 'ban biasa', price: 15000 },
      { name: 'ban tubles', price: 25000 },
    ],
  })
  const [vis, setVis] = useState({ modal: true, message: '' })
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'mitras'), data)
      setVis({ ...vis, modal: false, message: 'Pendaftaran berhasil.' })
      navigate('/', { replace: true })
    } catch (err) {
      alert(err)
    }
  }
  return (
    <>
      <Modal
        title={'Messages'}
        modal={vis.modal}
        element={
          <>
            {vis.message} <br />{' '}
            <button
              className="btn btn-light"
              onClick={(e) => props.handleClose(e)}
            >
              TUTUP
            </button>
          </>
        }
        handleClose={() => setVis({ ...vis, modal: true })}
      />
      <form style={{ padding: '15px' }}>
        <label className="form-label">Nama Tambal Ban</label>
        <input
          className="form-control"
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          required={true}
        />
        <label className="form-label">Handphone</label>
        <input
          className="form-control"
          type="text"
          name="mobile"
          value={data.mobile}
          onChange={handleChange}
          required={true}
        />
        <label className="form-label">Alamat</label>
        <input
          className="form-control"
          type="text"
          name="address"
          value={data.address}
          onChange={handleChange}
          required={true}
        />
        <label className="form-label">Koordinat</label>
        <input
          className="form-control"
          type="text"
          name="latlng"
          value={data.latlng}
          onChange={handleChange}
        />

        <button className="btn btn-light" onClick={handleSubmit}>
          SIMPAN
        </button>
      </form>
    </>
  )
}

export default MitraForm
