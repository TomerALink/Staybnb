import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate  } from 'react-router-dom'
import { GoogleAuthenticator } from './GoogleAuthenticator'
import { logout } from '../store/actions/user.actions.js'
import { userService } from '../services/user.service.js'

export function HamburgerMenu({loggedinUser, setLoggedinUser, setShowMenu, menuBtn }) {


  const menuRef = useRef(null)
  const navigate = useNavigate();
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

  function clickMenuItem(link){
    setShowMenu(false)
    navigate(link); 
  }

  return (
    (
      <div ref={menuRef} className="hamburger-menu" >

        {loggedinUser ?
          <div onClick={() => onLogOut()}>Log out</div>
          :
          <>
            <div onClick={()=> clickMenuItem('/authenticator')}>Log in</div>
            {/* <div>Sign up</div>  //Todo */}
          </>
        }


        <br />
        <hr />
        {/* <div>Gift cards</div> */}
        
        <div onClick={()=> clickMenuItem('/stay/order')}>My Orders</div>
        <div onClick={()=> clickMenuItem('/stay/add')}>Airbnb your home</div>
        {/* <div>Host an experience</div> */}
        {/* <div>Help Center</div> */}
      </div>
    )

  )
}