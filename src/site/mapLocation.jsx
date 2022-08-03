import React from 'react'
import '../assets/css/mapLocation.css'

const MapLocation = () => {
  return (
    <>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            title="coba-maps"
            width="200"
            height="200"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
          <br />
          <a
            rel="noopener noreferrer"
            href="https://www.embedgooglemap.net"
            target="_blank"
          >
            get google maps embed code
          </a>
        </div>
      </div>
    </>
  )
}

export default MapLocation
