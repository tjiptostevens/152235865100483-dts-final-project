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
          <div className="list-container">
            {data.map((d) => (
              <div key={d.id} className="list-card-container">
                <div className="list-map"></div>
                <div className="list-card">
                  <h4>{d.data.name}</h4>
                  <hr />
                  <p>Jarak : </p>
                  <p>Waktu : </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Body
