import { useDispatch, useSelector } from 'react-redux'
import { TagFilter } from "../cmps/TagFilterCarousel"
import { StayFilter } from './StayFilter.jsx'
import { stayService } from '../services/stay.service.js'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { SET_FILTER_BY } from "../store/reducers/stay.reducer.js"
import { Logo } from "../cmps/Logo.jsx"
import { HamburgerMenu } from './HamburgerMenu.jsx'
import { useEffect, useRef, useState } from 'react'
import { userService } from '../services/user.service.js'




export function AppHeader() {
	
	const [showMenu, setShowMenu] = useState(false)
	const location = useLocation()
	const dispatch = useDispatch()
	const menuBtn = useRef(null)
	const [loggedinUser, setLoggedinUser] = useState(userService.getLoggedinUser())
	// Special hook for accessing search-params:
	const [searchParams, setSearchParams] = useSearchParams()
	 
	
	const defaultFilter = stayService.getFilterFromSearchParams(searchParams)
	const filterBy = useSelector(storeState => storeState.stayModule.filterBy)

	useEffect(() => {
	
	}, [loggedinUser])

	function onSetFilterBy(filterBy) {
		dispatch({ type: SET_FILTER_BY, filterBy })
	}
	const isScrolled = true

	function onToggleMenu() {
		setShowMenu((prevShowMenu) => {
			const newShowMenu = !prevShowMenu
			return newShowMenu
		})
    }
	return (

		<div className={`header-container full   main-layout `}>
			{ showMenu && <HamburgerMenu loggedinUser={loggedinUser} setLoggedinUser={setLoggedinUser} menuBtn={menuBtn}  setShowMenu={setShowMenu} />}
			<div className='top-header-container full'>


				<header className={`app-header full main-layout ${location.pathname.startsWith('/stay/details') ? 'max-width' :''}`}>
					<section className="top-header">
						<Link to="/"><Logo /></Link>



						{(location.pathname.startsWith('/stay/details') || isScrolled) && (
							<section className='stay-experience-btns'>
								<Link className="btn-active" to="/">Stays</Link>
								<button className="btn">Experiences</button>
							</section>
						)}


						<div>
							<Link className="btn btn-active airbnb-your-home" to="/stay/add">Airbnb your home</Link>
							<button className="btn btn-active"><img className='i18' src="/src/assets/img/i18.svg" alt="" /></button>
							<button ref={menuBtn} onClick={onToggleMenu} className="btn btn-shadow">
								<img className='burger' src="/src/assets/img/burger.svg" alt="" />
								<img className='avatar' src={loggedinUser ? loggedinUser.picture ? loggedinUser.picture :"/src/assets/img/avatar.svg" :"/src/assets/img/avatar.svg"} alt="" />
							</button>
							
						</div>
					</section>


					{(!location.pathname.startsWith('/stay/details') || !isScrolled) &&
						<section className={`serch-filter-container`}>
							<StayFilter filterBy={filterBy} defaultFilter={defaultFilter} />
						</section>}
				</header>
			</div>
			{!location.pathname.startsWith('/stay/') &&

				<section className="bottom-header">
					<TagFilter filterBy={filterBy} onSetFilter={onSetFilterBy} defaultFilter={defaultFilter} />
				</section>
			}


		</div>

	)
}
