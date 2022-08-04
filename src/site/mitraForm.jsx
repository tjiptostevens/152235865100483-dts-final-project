import React, { useState } from 'react'
import { auth, db } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const MitraForm = () => {
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
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'mitras'), data)
    } catch (err) {
      alert(err)
    }
  }
  return (
    <>
      <form style={{ padding: '15px' }}>
        <label className="form-label">Nama</label>
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
          required={true}
        />

        <button className="btn btn-light" onClick={handleSubmit}>
          SIMPAN
        </button>
      </form>
    </>
  )
}

export default MitraForm
