import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ImgSlider from './ImgSlider'
import { utilService } from '../services/util.service'
import { stayService } from '../services/stay.service'
import { saveReservation } from "../store/actions/reservation.actions"

export function StayOrderPreview({ stayOrder }) {

    const [status, setStatus] = useState(stayOrder.status)
    const [order, setOrder] = useState(stayOrder)

    function updateStatus(ev, statusToUpdate){
        ev.stopPropagation()
        
        setStatus(statusToUpdate)
        
        console.log(status)
        setOrder(prevOrder => ({
            ...prevOrder,
            status: statusToUpdate
        }))

        saveReservation({
            ...order,
            status: statusToUpdate
        })
    }

    useEffect(() => {
        console.log("Status updated to:", status); // Logs after the state update
    }, [status]);

    return (

        <div className='stay-order-preview'>
            <span>{stayOrder.guest.fullname}</span>
            <span>{stayOrder.stay.name}</span>
            <span>{stayOrder.startDate}</span>
            <span>{stayOrder.endDate}</span>
            <span>
            ${ Number(`${stayOrder.pricePerNight * stayOrder.numberOfNights + stayOrder.taxes}`).toFixed(2)}
            </span>
            {status === 'pending' ?
            <div>
            <button onClick={(event)=>updateStatus(event, 'approve')} className='approve-btn'>Approve</button>
            <button onClick={(event)=>updateStatus(event, 'decline')}  className='decline-btn'>Decline</button>
            </div>
            :
            <span className={`${status}`}>{status}</span>
            }

        </div>
    )
}