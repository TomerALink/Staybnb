import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ImgSlider from './ImgSlider'
import { utilService } from '../services/util.service'
import { stayService } from '../services/stay.service'
import { saveReservation } from "../store/actions/reservation.actions"

export function StayTripPreview({ stayTrip }) {

    const [status, setStatus] = useState(stayTrip.status)
    const [Trip, setTrip] = useState(stayTrip)

    function updateStatus(ev, statusToUpdate) {
        ev.stopPropagation()

        setStatus(statusToUpdate)

        console.log(status)
        setTrip(prevTrip => ({
            ...prevTrip,
            status: statusToUpdate
        }))

        saveReservation({
            ...Trip,
            status: statusToUpdate
        })
    }

    useEffect(() => {
        console.log("Status updated to:", status); // Logs after the state update
    }, [status]);

    return (

        <div className='stay-trip-preview'>
            <div>
                <img className='stay-trip-img' src={stayTrip.stay.imgUrls[0]} alt="" />
            </div>
            <div className='stay-name'>
            <div>{stayTrip.stay.name.split(',')[0]}</div>
            <div>{stayTrip.stay.name.split(',')[1]}</div>
            </div>
            <span>{stayTrip.hostId.fullname}</span>
            <span>{stayTrip.startDate}</span>
            <span>{stayTrip.endDate}</span>
            <span>
                ${Number(`${stayTrip.pricePerNight * stayTrip.numberOfNights + stayTrip.taxes}`).toFixed(2)}
            </span>
            <span className={`${status}`}>{status}</span>

        </div>
    )
}