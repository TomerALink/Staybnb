import { useDispatch, useSelector } from 'react-redux'
import { TagFilter } from "../cmps/TagFilterCarousel"
import { StayFilter } from './StayFilter.jsx'
import { stayService } from '../services/stay.service.js'
import { useLocation, useSearchParams } from 'react-router-dom'
import { SET_FILTER_BY } from "../store/reducers/stay.reducer.js"


export function AppHeader() {

	const location = useLocation()


	const dispatch = useDispatch()

	// Special hook for accessing search-params:
	const [searchParams, setSearchParams] = useSearchParams()
	const defaultFilter = stayService.getFilterFromSearchParams(searchParams)
	const filterBy = useSelector(storeState => storeState.stayModule.filterBy)

	function onSetFilterBy(filterBy) {
		dispatch({ type: SET_FILTER_BY, filterBy })
	}
	const isScrolled = true
	return (

		<div className='header-container'>
			<div className='top-header-container'>


				<header className="app-header full">
					<section className="top-header">
						<Logo />


						{(!location.pathname.startsWith('/stay/details') || isScrolled) && (
							<section className='stay-experience-btns'>
								<button className="btn-active">Stays</button>
								<button className="btn">Experiences</button>
							</section>
						)}


						<div>
							<button className="btn btn-active airbnb-your-home">Airbnb your home</button>
							<button className="btn btn-active"><img className='i18' src="/src/assets/img/i18.svg" alt="" /></button>
							<button className="btn btn-shadow"><img className='burger' src="/src/assets/img/burger.svg" alt="" /><img className='avatar' src="/src/assets/img/avatar.svg" alt="" /></button>
						</div>
					</section>


					{(!location.pathname.startsWith('/stay/details') || !isScrolled) &&
						<section className='serch-filter-container'>
							<StayFilter filterBy={filterBy} defaultFilter={defaultFilter} />
						</section>}
				</header>
			</div>
			{!location.pathname.startsWith('/stay/details') &&

				<section className="bottom-header">
					<TagFilter filterBy={filterBy} onSetFilter={onSetFilterBy} defaultFilter={defaultFilter} />
				</section>
			}


		</div>

	)
}
