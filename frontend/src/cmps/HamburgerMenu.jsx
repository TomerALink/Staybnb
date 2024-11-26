import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { GoogleAuthenticator } from './GoogleAuthenticator'
import { logout } from '../store/actions/user.actions.js'
import { userService } from '../services/user.service.js'
import { LoginModal } from './LoginModal.jsx'

export function HamburgerMenu({ loggedinUser, setLoggedinUser, setShowMenu, menuBtn, openLoginModal, setOpenLoginModal }) {


  const menuRef = useRef(null)
  const navigate = useNavigate()
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

  async function fakeLogin() {
    await userService.fakeLogin()
    document.location.href = '/'
  }

  function clickMenuItem(link) {
    // setShowMenu(false)
    navigate(link)
  }

  function clickMenuItemLoggedin(link) {
    setShowMenu(false)
    if (loggedinUser) {

      navigate(link)
    }
    else {
      console.log(openLoginModal)

      setOpenLoginModal(true)
      console.log(openLoginModal)
    }
    //   await userService.fakeLogin()
  }

  return (
    (
      <div ref={menuRef} className="hamburger-menu" >

        {loggedinUser ?
          <div onClick={() => onLogOut()}>Log out</div>
          :
          <>
            <div onClick={() => clickMenuItem('/authenticator')}>Log in</div>
            <div onClick={() => clickMenuItem('/authenticator')}>Sign up</div>
            <div onClick={() => fakeLogin()}>Log in with demo user</div>
          </>
        }


        <br />
        <hr />
        <div onClick={() => clickMenuItem('/')}>Stays</div>
        <div onClick={() => clickMenuItemLoggedin('/stay/order')}>My Orders</div>
        <div onClick={() => clickMenuItemLoggedin('/stay/Trip')}>My Trips</div>
        <div onClick={() => clickMenuItemLoggedin('/stay/add')}>Airbnb your home</div>
      </div>
    )

  )
}