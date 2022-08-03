import React from 'react'
import useWindow from '../custom/useWindow'

const Video = (props) => {
  const { width } = useWindow()
  return (
    <video
      autoPlay={true}
      loop={true}
      controls={false}
      playsInline
      muted
      style={
        width > 450 ? { margin: 'auto', width: '100%' } : { margin: 'auto' }
      }
    >
      <source src={props.video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default Video
