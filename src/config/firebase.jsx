// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const auth = getAuth(app)
const db = getFirestore(app)

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
}
const registerWithEmailPassword = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password)
    console.log('user : ' + user.user)
    await setDoc(doc(db, 'users', user.user.uid), {
      uid: user.user.uid,
      displayName: 'User',
      photoURL: user.user.photoURL,
      isOnline: false,
    })
    return user
  } catch (error) {
    console.log('error code : ' + error.code)
    console.log('error message : ' + error.message)
    return error
  }
}

const loginWithEmailPassword = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password)
    console.log('user : ' + user.email)
    return user
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
  registerWithEmailPassword,
  loginWithEmailPassword,
  forgotPassword,
  logout,
}
