import React, { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { loginWithGoogle } from '../store/actions/user.actions.js'
import { useNavigate } from 'react-router-dom'


export function GoogleAuthenticator() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    /* global google */
    window.google.accounts.id.initialize({
      client_id: '951898773385-52ndo3mijc2krbcn6k06vatsib7cnnp6.apps.googleusercontent.com', // Replace with your Client ID
      callback: handleCredentialResponse,
    })

    window.google.accounts.id.renderButton(
      document.getElementById('google-signin'),
      { theme: 'outline', size: 'large' } // Customization options
    )

    window.google.accounts.id.prompt() // Display the One Tap UI
  }, [])

  const handleCredentialResponse = (response) => {
    const data = jwtDecode(response.credential) // Decode the token
    setUser(data)
    loginWithGoogle(data)
    document.location.href = '/'
  }

  const handleLogout = () => {
    setUser(null)
    window.google.accounts.id.disableAutoSelect() // Optional: Disable auto-login
  }

  return (
    <div className='App'>
      <h1>Google Login Demo</h1>
      {!user ? (
        <div id='google-signin'></div>
      ) : (
        <div>
          {console.log(user)}
          <h2>Welcome, {user.name}</h2>
          <img style={{ 'border-radius': '50%' }} src={user.picture} alt='Profile' />
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}