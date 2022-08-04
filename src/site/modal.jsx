import React, { useState } from 'react'

const Modal = (props) => {
  const [vis, setVis] = useState({ vis: false, message: '' })
  return (
    <>
      {props.modal ? (
        ''
      ) : (
        <div className="modal-window">
          <div className="col-md-6 col-11" style={{ borderRadius: '5px' }}>
            <div className="modal-title">
              <div>
                <h1>{props.title}</h1>
              </div>
              <div
                style={{ cursor: 'pointer' }}
                onClick={() => setVis({ ...vis, message: '', modal: true })}
              >
                <i className="bi bi-x-square"></i>
              </div>
            </div>
            <hr />
            <div
              className="w-100 justify-content-around"
              style={{
                textAlign: 'justify',
                height: 'auto',
              }}
            >
              <div>{props.element}</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
