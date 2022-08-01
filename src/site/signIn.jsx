import React from 'react'
import { signInWithGoogle } from '../config/firebase'

const SignIn = ({ text }) => {
  return (
    <>
      <button className="btn btn-primary" onClick={signInWithGoogle}>
        {text} dengan Google
      </button>
    </>
  )
}

export default SignIn
