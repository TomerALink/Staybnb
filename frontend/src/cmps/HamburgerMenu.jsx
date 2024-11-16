import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export function HamburgerMenu({setShowMenu, menuBtn}) {
    

    const menuRef =useRef(null)

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

    return (
        (
            <div ref={menuRef} className="hamburger-menu" onClick={(ev) => ev.stopPropagation()}>
                <div>Log in</div>
                <div>Sign up</div>
                <br />
                <hr/>
                <div>Gift cards</div>
                <Link to="/stay/add"><div>Airbnb your home</div></Link>
                <div>Host an experience</div>
                <div>Help Center</div>
            </div>
        )

    )
}