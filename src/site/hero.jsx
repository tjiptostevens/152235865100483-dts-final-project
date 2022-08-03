import React, { useState } from 'react'
import '../assets/css/hero.css'
import video1 from '../assets/2703043068.mp4'
import video2 from '../assets/1828402564.mp4'
import Video from '../components/video'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [video, setVideo] = useState(true)

  return (
    <>
      <div className="hero">
        {video ? <Video video={video1} /> : <Video video={video2} />}
        <div className="hero-container">
          <div className="hero-content">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h1 style={{ fontWeight: '900', fontSize: '48px' }}>
                <b>TIDAK LAGI KEPANASAN DAN KEHAUSAN</b>
              </h1>
              <h2 style={{}}>
                <b>TAMBAL BAN DIMANA SAJA.</b>
              </h2>
              <div
                style={{
                  borderBottom: '2px solid white',
                  width: '30%',
                  margin: '25px 0',
                }}
              ></div>
              {/* Daftar Sekarang */}
              <div>
                <small style={{ fontWeight: '300' }}>
                  <i>DAFTAR SEKARANG</i>
                </small>
                <div className="hero-btn-container">
                  <Link to="/login/user">
                    <button
                      className="btn btn-light"
                      style={{
                        margin: '0 15px',
                        padding: '5px 50px',
                        minWidth: '100px',
                      }}
                    >
                      PENGGUNA
                    </button>
                  </Link>
                  <Link to="/login/mitra">
                    <button
                      className="btn btn-light"
                      style={{
                        margin: '0 15px',
                        padding: '5px 50px',
                        minWidth: '100px',
                      }}
                      onMouseEnter={() => setVideo(false)}
                      onMouseLeave={() => setVideo(true)}
                    >
                      MITRA
                    </button>
                  </Link>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <input
                  className="form-control"
                  type="search"
                  name="search"
                  style={{ margin: '0' }}
                />
                <button className="btn btn-light">Cari</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
