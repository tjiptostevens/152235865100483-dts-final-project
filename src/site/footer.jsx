import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="w-100">
        <div className="logo">
          <img src="../assets/img/logo.png" alt="logo" height="25px" />
        </div>
        <div className="site-map col-md-12">
          <div className="col-md-3">
            <p>
              <b>Perusahaan</b>
            </p>
          </div>
          <div className="col-md-3">
            <p>
              <b>Bergabung </b>
            </p>
          </div>
          <div className="col-md-3">
            <p>
              <b>Karir</b>
            </p>
          </div>
          <div className="col-md-3">
            <p>
              <b>Hubungi kami</b>
            </p>
          </div>
        </div>
        <hr />
        <div className="connect col-md-12">
          <p>
            <b>Tetap terkoneksi</b>
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
