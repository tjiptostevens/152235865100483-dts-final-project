import React from 'react'
import { auth, logout } from '../config/firebase'

const SignOut = () => {
  return (
    auth.currentUser && (
      <>
        <button className="btn btn-primary" onClick={() => logout()}>
          Sign Out
        </button>
      </>
    )
  )
}

export default SignOut
