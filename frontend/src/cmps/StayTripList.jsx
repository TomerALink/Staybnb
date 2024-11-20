import { useEffect, useState } from 'react'
import { loadReservations } from '../store/actions/reservation.actions.js'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { StayTripPreview } from './StayTripPreview.jsx'
import { userService } from '../services/user.service.js'


export function StayTripList() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const stayTrips = useSelector(storeState => storeState.reservationModule.reservations)
    const isLoading = useSelector(storeState => storeState.stayModule.isLoading)
    const [loggedinUser, setLoggedinUser] = useState(userService.getLoggedinUser())

    useEffect(() => {
        loadReservations()
            .catch(err => {
                console.log('Cannot load stayTrips!')
                // showErrorMsg('Cannot load stayTrips!')
            })
    }, [])

    function onNavigatToDetiles(id){
        navigate(`/stay/details/${id}`)
    }

    return <>
    
        <div className='order-list-container'>
            <div className='orders-tag'>Trips</div>
        {/* <div className='order-list-greeting'>Hi {loggedinUser.fullname}, you have {stayTrips.filter(obj => obj.status === "pending").length} pending trips</div>
         */}
         <div className='order-list-greeting'>Hi {loggedinUser.fullname}, you have {stayTrips.length}  trips</div>
        <div className='trip-list-title'>
            <span></span>
            <span>Stay Name</span>
            <span>Host Name</span>
            <span>Check in</span>
            <span>Check out</span>
            <span>Total</span>
            <span>Status</span>

        </div>
            <ul className="clean-list">
                {stayTrips.map(stayTrip =>
                    <li onClick={()=>onNavigatToDetiles(stayTrip.stay._id)} key={stayTrip._id}>
                        {console.log(stayTrip)}
                        <StayTripPreview stayTrip={stayTrip}/>
                    </li>)
                }
            </ul>
        </div>
    </>
}