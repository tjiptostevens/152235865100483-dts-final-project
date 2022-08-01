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
            DAFTAR SEKARANG
            <div className="hero-btn-container">
              <Link to="/login/pengguna">
                <button className="btn btn-light">PENGGUNA</button>
              </Link>
              <Link to="/login/mitra">
                <button
                  className="btn btn-light"
                  onMouseEnter={() => setVideo(false)}
                  onMouseLeave={() => setVideo(true)}
                >
                  MITRA
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
