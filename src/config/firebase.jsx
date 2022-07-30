// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCrEVtfWXDz7WzIRAa5Y0U5muMRV1PCrJw',
  authDomain: 'bantuan-febfa.firebaseapp.com',
  projectId: 'bantuan-febfa',
  storageBucket: 'bantuan-febfa.appspot.com',
  messagingSenderId: '783113454638',
  appId: '1:783113454638:web:5441b12b52b801ca46cbbf',
  measurementId: 'G-EMH54QHZ79',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)
const db = getFirestore(app)

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
}
const registerEmailPassword = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password)
    console.log('user : ' + user.user)
  } catch (error) {
    console.log('error code : ' + error.code)
    console.log('error message : ' + error.message)
    return error
  }
}

const loginEmailPassword = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password)
    console.log('user : ' + user.email)
  } catch (error) {
    console.log('error code : ' + error.code)
    console.log('error message : ' + error.message)
    return error
  }
}

const forgotPassword = async (email) => {
  try {
    const user = await sendPasswordResetEmail(auth, email)
    console.log('user : ' + user)
  } catch (error) {
    console.log('error code : ' + error.code)
    console.log('error message : ' + error.message)
    return error
  }
}
const logout = async () => {
  try {
    const user = await signOut(auth)
    console.log('user : ' + user)
  } catch (error) {
    console.log('error code : ' + error.code)
    console.log('error message : ' + error.message)
    return error
  }
}

export {
  auth,
  db,
  signInWithGoogle,
  registerEmailPassword,
  loginEmailPassword,
  forgotPassword,
  logout,
}
