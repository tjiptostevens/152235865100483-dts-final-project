import React from 'react'
import '../assets/css/body.css'
import useGetAllDoc from '../custom/useGetAllDoc'
import BodyCard from './bodyCard'

const Body = () => {
  const data = useGetAllDoc('mitras')

  return (
    data && (
      <>
        {console.log(data)}
        <section className="body-container">
          <div className="w-100" style={{ height: '50px' }}></div>
          <div className="w-100">
            <div
              className="row col-md-12"
              style={{ margin: '0', padding: '0' }}
            >
              <div className="col-md-3">
                <div className="list-filter">
                  <p>Categori</p>
                </div>
              </div>
              <div className="col-md-9">
                <div className="list-container ">
                  {data.map((d) => (
                    <div key={d.id} className="list-card-container">
                      <BodyCard data={d.data} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  )
}

export default Body
