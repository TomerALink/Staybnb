// import { userService } from '../services/user'
import { useEffect } from 'react'
import { StayPreview } from './StayPreview'
import { loadStays, setFilterBy } from '../store/actions/stay.actions.js'
import { useDispatch, useSelector } from 'react-redux'


export function StayList() {

    const dispatch = useDispatch()
    const stays = useSelector(storeState => storeState.stayModule.stays)
    const filterBy = useSelector(storeState => storeState.stayModule.filterBy)
    const isLoading = useSelector(storeState => storeState.stayModule.isLoading)

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    useEffect(() => {
        loadStays()
            .catch(err => {
                console.log('Cannot load stays!')
                // showErrorMsg('Cannot load stays!')
            })
    }, [filterBy])

    return <section>
        <div className='list-container'>
            <ul className="list">
                {stays.map(stay =>
                    <li key={stay._id}>
                        <StayPreview stay={stay} />

                    </li>)
                }
            </ul>
        </div>
    </section>
}