import React from 'react'
import '../assets/css/about.css'
import logo from '../assets/img/logo512.png'
import video from '../assets/1828402564.mp4'
import Video from '../components/video'
import { GoogleMap, Marker } from '@react-google-maps/api'
import { IsLoaded } from '../config/gMaps'

const center = {
  lat: -6.9698067,
  lng: 110.3895378,
}

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
            <div
              className="col-md-3"
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
              </p>
              <p>
                TAMBAL BAN menggunakan teknologi dari google yakni Geo Location
                untuk dapat mem'pin point lokasi anda. Juga menggunakan
                teknologi lainnya untuk memberikan informasi tempat tambal ban
                terdekat beserta harga nya.
              </p>
              <br />
              <p style={{ lineHeight: '1.2' }}>
                Office : <br />
                <b style={{ padding: '15px' }}>PT. Superhore Tambal Ban</b>
                <br />
                <small style={{ padding: '15px' }}>
                  Jl. Superhore Blok A1, No. 7 <br />
                </small>
                <small style={{ padding: '15px' }}>
                  Semarang - Jawa Tengah
                </small>
              </p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4">
              {IsLoaded ? (
                <GoogleMap
                  center={center}
                  zoom={15}
                  mapContainerStyle={{ width: '100%', minHeight: '300px' }}
                  options={{
                    streetViewControl: false,
                    fullscreenControl: false,
                    mapTypeControl: false,
                  }}
                >
                  <Marker position={center} />
                </GoogleMap>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="w-100" style={{ height: '50px' }}></div>
        </div>
      </div>
    </>
  )
}

export default About
