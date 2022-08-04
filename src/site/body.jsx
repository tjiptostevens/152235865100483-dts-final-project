import React from 'react'
import '../assets/css/body.css'
import useGetAllDoc from '../custom/useGetAllDoc'

const Body = () => {
  const data = useGetAllDoc('mitras')

  return (
    <>
      {console.log(data)}
      <section className="body-container">
        <div className="w-100">
          <div className="list"></div>
          <div className="list-detail">{JSON.stringify(data)}</div>
        </div>
      </section>
    </>
  )
}

export default Body
