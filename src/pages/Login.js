import React from 'react'
import { auth, provider} from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = ({setIsAuth}) => {

  const navigate = useNavigate()

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider)
    localStorage.setItem('isAuth', true)
    setIsAuth(true)
    
    navigate('/')
  }


  return (
    <div className="login-container">
      <h1>Sign in with Google account</h1>
      <button onClick={signInWithGoogle} >Sign in</button>
    </div>
  )
}

export default Login