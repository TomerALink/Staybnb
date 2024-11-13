import { useDispatch, useSelector } from 'react-redux'
import { TagFilter } from "../cmps/TagFilterCarousel"
import { StayFilter } from './StayFilter.jsx'
import { stayService } from '../services/stay.service.js'
import { useLocation, useSearchParams } from 'react-router-dom'
import { SET_FILTER_BY } from "../store/reducers/stay.reducer.js"
import { TopHeader } from './TopHeader.jsx'
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

	return (
		<header className="app-header full">
			<TopHeader />
			<section className='serch-filter-container'>
				<StayFilter filterBy={filterBy} defaultFilter={defaultFilter} />
			</section>
			{!location.pathname.startsWith('/stay/') &&
				<section className="bottom-header">
					<TagFilter filterBy={filterBy} onSetFilter={onSetFilterBy} defaultFilter={defaultFilter} />
				</section>
			}
		</header>
	)
}
