// import { userService } from '../services/user'
import { useEffect } from 'react'
import { StayPreview } from './StayPreview'
import { loadStays, setFilterBy } from '../store/actions/stay.actions.js'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'



export function StayList({currentPos}) {
    const navigate = useNavigate()
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

    function onNavigatToDetiles(id){
        navigate(`/stay/details/${id}`)
    }

    return <section>
        <div className='list-container'>
      
            <ul className="list">
                {stays.map(stay =>
                    <li onClick={()=>onNavigatToDetiles(stay._id)} key={stay._id}>
                        <StayPreview currentPos={currentPos}  stay={stay} />
                    </li>)
                }
            </ul>
        </div>
    </section>
}