import React from 'react'
import '../assets/css/about.css'
import logo from '../assets/img/logo512.png'
import video from '../assets/1828402564.mp4'
import Video from '../components/video'
const About = () => {
  return (
    <>
      <div className="w-100">
        <div className="hero" style={{ minHeight: '40vh' }}>
          <Video video={video} />
        </div>
        <div className="about-container">
          <div className="w-100" style={{ height: '25px' }}></div>
          <h1>Tentang Kami</h1>
          <div className="w-100" style={{ height: '50px' }}></div>
          <div className="row col-md-12">
            <div className="col-md-2"></div>
            <div
              className="col-md-4"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                className="mb-4"
                src={logo}
                alt="logo kotak"
                width="300"
                height="300"
              />
            </div>
            <div className="col-md-4">
              <h2>TAMBAL BAN</h2>
              <hr />
              <br />
              <p style={{ textAlign: 'justify' }}>
                TAMBAL BAN merupakan salah satu usaha strategis yang yang
                berfokus kepada layanan prima tambal ban bergaransi baik motor
                maupun mobil. Usaha ini menggunakan teknologi untuk mempermudah
                dalam memberikan layanan tambal ban ke tempat kejadian.
                <br />
                TAMBAL BAN menggunakan teknologi dari google yakni Geo Location
                untuk dapat mem'pin point lokasi anda. Juga menggunakan
                teknologi lainnya untuk memberikan data tempat tambal ban
                terdekat beserta harga nya.
              </p>
            </div>

            <div className="col-md-2"></div>
          </div>
          <div className="w-100" style={{ height: '50px' }}></div>
        </div>
      </div>
    </>
  )
}

export default About
