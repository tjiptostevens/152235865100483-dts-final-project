import React from 'react'

const Video = (props) => {
  return (
    <video
      autoPlay={true}
      loop={true}
      controls={false}
      playsInline
      muted
      style={{ margin: 'auto', width: '100%' }}
    >
      <source src={props.video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default Video
