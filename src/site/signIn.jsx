import React from 'react'
import { signInWithGoogle } from '../config/firebase'

const SignIn = () => {
  return (
    <>
      <button className="btn btn-primary" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </>
  )
}

export default SignIn
