import React, { useState } from 'react'
import { auth } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import mechanic from '../assets/img/mechanic.webp'
import Modal from './modal'
import MitraForm from './mitraForm'
import { useNavigate } from 'react-router-dom'

const MitraInfo = () => {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)
  const [vis, setVis] = useState({ modal: true, message: '' })

  return (
    <>
      <Modal
        title={'Daftar Mitra'}
        modal={vis.modal}
        handleClose={(e) => setVis({ ...vis, modal: true })}
        element={
          <MitraForm handleClose={(e) => setVis({ ...vis, modal: true })} />
        }
      />
      <div className="w-100">
        <div className="mitra-container">
          <div
            className="row col-md-12"
            style={{
              background: `url(${mechanic}) no-repeat center center / cover`,
              minHeight: '60vh',
            }}
          >
            <div className="col-md-1"></div>
            <div
              className="col-md-4"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textShadow: '2px 2px 2px black',
              }}
            >
              <h1>Tidak perlu kekuatan super untuk jadi superhero.</h1>
              <p>
                Buat gabung jadi Mitra Tambal Ban, kamu ga perlu tempat yang
                strategis, mahal, dan tidak terjangkau. Siapa pun bisa jadi
                superhero! Hanya dengan bantu orang lain menambal ban mereka.
                <br /> Yuk, gabung sekarang.
              </p>
              <button
                className="btn btn-light"
                style={{ alignSelf: 'flex-start' }}
                onClick={() =>
                  user
                    ? setVis({ ...vis, modal: false })
                    : navigate('/login', { replace: true })
                }
              >
                Daftar Mitra
              </button>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MitraInfo
