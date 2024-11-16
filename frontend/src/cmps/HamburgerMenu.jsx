import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GoogleAuthenticator } from './GoogleAuthenticator'
import { logout } from '../store/actions/user.actions.js'
import { userService } from '../services/user.service.js'

export function HamburgerMenu({loggedinUser, setLoggedinUser, setShowMenu, menuBtn }) {


  const menuRef = useRef(null)

  useEffect(() => {
    // Handler to call when clicking outside
    function handleClickOutside(event) {
      if (menuRef.current && !menuBtn.current.contains(event.target) && !menuRef.current.contains(event.target)) {
        setShowMenu(false)
      }
    }

    // Bind the event listener
    window.addEventListener("mousedown", handleClickOutside)
    return () => {
      // Unbind the event listener on cleanup
      window.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  function onLogOut() {
    logout()
    setLoggedinUser(null)
  }

  return (
    (
      <div ref={menuRef} className="hamburger-menu" onClick={(ev) => ev.stopPropagation()}>

        {loggedinUser ?
          <div onClick={() => onLogOut()}>Log out</div>
          :
          <>
            <Link to="/authenticator"><div>Log in</div></Link>
            {/* <div>Sign up</div>  //Todo */}
          </>
        }


        <br />
        <hr />
        <div>Gift cards</div>
        <Link to="/stay/add"><div>Airbnb your home</div></Link>
        <div>Host an experience</div>
        <div>Help Center</div>
      </div>
    )

  )
}