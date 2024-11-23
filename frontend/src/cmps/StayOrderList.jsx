import { useEffect, useState } from 'react'
import { setFilterBy } from '../store/actions/stay.actions.js'
import { loadReservations } from '../store/actions/reservation.actions.js'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { StayOrderPreview } from './StayOrderPreview.jsx'
import { userService } from '../services/user.service.js'
import { socketService, SOCKET_EVENT_UPDATE_ORDER_LIST } from '../services/socket.service'


export function StayOrderList() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const stayOrders = useSelector(storeState => storeState.reservationModule.reservations)
    const isLoading = useSelector(storeState => storeState.stayModule.isLoading)
    const [loggedinUser, setLoggedinUser] = useState(userService.getLoggedinUser())


    socketService.login(loggedinUser._id)
    socketService.on(SOCKET_EVENT_UPDATE_ORDER_LIST, (msg)=> {
        console.log(msg)
        loadReservations()
    })


    useEffect(() => {
        const filterBy = { hostId: loggedinUser._id}
        setFilterBy(filterBy)
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
            <div className='orders-tag'>Orders</div>
        {/* <div className='order-list-greeting'>Hi {loggedinUser.fullname}, you have {stayOrders.filter(obj => obj.status === "pending").length} pending orders</div> */}
        <div className='order-list-greeting'>Hi {loggedinUser.fullname}, you have {stayOrders.length}  orders</div>
        <div className='order-list-title'>
            <span>Customer Name</span>
            <span claass="align-left">Stay Name</span>
            <span>Check in</span>
            <span>Check out</span>
            <span>Total</span>
            <span>Status</span>

        </div>
            <ul className="clean-list">
                {stayOrders.filter(stayOrder => stayOrder.hostId._id === loggedinUser._id).map(stayOrder =>
                        <li onClick={()=>onNavigatToDetiles(stayOrder.stay._id)} key={stayOrder._id}>
                        <StayOrderPreview stayOrder={stayOrder}/>
                    </li>)
                }
            </ul>
        </div>
    </>
}