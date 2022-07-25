import React from 'react'
import {Link} from 'react-router-dom'
import { auth } from '../firebase-config'
import { signOut } from 'firebase/auth'

const Nav = ({isAuth, setIsAuth}) => {

  const signOutGoogle = () => {
    signOut(auth).then(() => {
      localStorage.removeItem('isAuth')
      setIsAuth(false)
      window.location.pathname = './login'
    })
  }

  return (
    <nav className="nav-container">
      <h1><Link to='/'>Home</Link></h1>
      {isAuth ?
        <>
          <h1><Link to='/post'>Post</Link></h1>
          <button onClick={signOutGoogle}>Sign Out</button>
        </> :
          <h1 className='sign-in'><Link to='/login'>Sign In</Link></h1> 
      }
    </nav>
  )
}

export default Nav