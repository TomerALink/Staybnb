// import { userService } from '../services/user'
import { useEffect, useState } from 'react'
// import { StayOrderPreview } from './StayOrderPreview'
import { loadReservations } from '../store/actions/reservation.actions.js'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { StayOrderPreview } from './StayOrderPreview.jsx'
import { userService } from '../services/user.service.js'



export function StayOrderList({currentPos}) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const stayOrders = useSelector(storeState => storeState.reservationModule.reservations)
    const isLoading = useSelector(storeState => storeState.stayModule.isLoading)
    const [loggedinUser, setLoggedinUser] = useState(userService.getLoggedinUser())

 

    useEffect(() => {
        loadReservations()
            .catch(err => {
                console.log('Cannot load stayOrders!')
                // showErrorMsg('Cannot load stayOrders!')
            })
    }, [])

    function onNavigatToDetiles(id){
        navigate(`/stay/details/${id}`)
    }

    return <>
    
        <div className='order-list-container'>
        <div className='order-list-greeting'>Hi {loggedinUser.fullname}, you have {stayOrders.filter(obj => obj.status === "pending").length} pending orders</div>
        <div className='order-list-title'>
            <span>Customer Name</span>
            <span>Stay Name</span>
            <span>Check in</span>
            <span>Check out</span>
            <span>Total</span>
            <span>Status</span>
            <span>Actions</span>

        </div>
            <ul className="clean-list">
                {stayOrders.map(stayOrder =>
                    <li onClick={()=>onNavigatToDetiles(stayOrder.stay._id)} key={stayOrder._id}>
                        {console.log(stayOrder)}
                        <StayOrderPreview stayOrder={stayOrder}/>
                    </li>)
                }
            </ul>
        </div>
    </>
}