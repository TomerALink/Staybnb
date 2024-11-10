import { useDispatch, useSelector } from 'react-redux'
import { Logo } from './Logo.jsx'
import { TagFilter } from "../cmps/TagFilterCarousel"
import { loadStays, removeStay, removeStayOptimistic, saveStay, setFilterBy } from '../store/actions/stay.actions.js'
import { useEffect } from 'react'
export function AppHeader() {
	const filterBy = useSelector(storeState => storeState.stayModule.filterBy)

	useEffect(() => {
    }, [filterBy])

	function onSetFilter(filterBy) {
		console.log(filterBy)
        setFilterBy(filterBy)
    }


	return (
		<header className="app-header full">
			<section className="top-header">
				<Logo />
				<section className='stay-experience-btns'>
					<button className="btn-active">Stays</button>
					<button className="btn">Experiences</button>
				</section>
				<div>
				<button className="btn btn-active airbnb-your-home">Airbnb your home</button>
				<button className="btn btn-active"><img className='i18' src="/src/assets/img/i18.svg" alt="" /></button>
				<button className="btn btn-shadow"><img className='burger' src="/src/assets/img/burger.svg" alt="" /><img className='avatar' src="/src/assets/img/avatar.svg" alt="" /></button>
					
				</div>
			</section>
			<section className="bottom-header">
				<TagFilter filterBy={filterBy} onSetFilter={onSetFilter}/>
			</section>
				
		</header>
	)
}
