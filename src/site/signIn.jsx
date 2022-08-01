import React from 'react'
import { signInWithGoogle } from '../config/firebase'

const SignIn = () => {
  return (
    <>
      <button className="btn btn-primary" onClick={signInWithGoogle}>
        Google Login
      </button>
    </>
  )
}

export default SignIn
