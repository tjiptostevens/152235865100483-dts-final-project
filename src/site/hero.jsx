import React from 'react'
import '../assets/css/hero.css'
import video from '../assets/2703043068.mp4'
import Video from '../components/video'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <div className="hero">
        <Video video={video} />
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
              <Link to="/login">
                <div
                  className="btn btn-light"
                  style={{
                    margin: '0 15px',
                    padding: '5px 50px',
                    minWidth: '100px',
                    fontSize: '24px',
                  }}
                >
                  <small style={{ fontWeight: '300' }}>
                    <i>DAFTAR SEKARANG</i>
                  </small>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
