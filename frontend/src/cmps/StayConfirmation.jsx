import { useState } from 'react'
import { saveReservation } from "../store/actions/reservation.actions"
import { useNavigate } from 'react-router-dom'

export function StayConfirmation({ orderDetails, openModal, setOpenModal }) {
    const navigate = useNavigate()
    const [confirmed, setConfirmed] = useState(false)

    function onConfirmClicked() {
        setConfirmed(true)
        onSaveReservation()
    }

    function onSaveReservation() {
    
        saveReservation(orderDetails)
            .then(() => {
                console.log('Reservation Saved!')
                // showSuccessMsg('Reservation Saved!')
                
            })
            .catch(err => {
                console.log('Had issues in reservation details', err)
                // showErrorMsg('Had issues in reservation details')
            })
    }

    function onToggleModal() {
        setOpenModal(!openModal)
    }

    function onBackClicked() {
        onToggleModal()
        navigate('/')
    }
    // console.log(orderDetails)
    const { adults, children, infants, pets } = orderDetails.guests
    return (
        <>
            <div className="confirmation-modal-overlay" onClick={onToggleModal}>
                <div className="confirmation-modal" onClick={(ev) => ev.stopPropagation()}>
                    <div className="stay-confirmation">
                        <div>{confirmed ?
                            <div className='title'>
                                <img src='/src/assets/img/check.png' alt="" />
                                <h2>Reserved successfully</h2>
                            </div>
                            :
                            <h2>One last step</h2>
                        }</div>
                        <br />
                        <div>{confirmed ?
                            <p>
                                You can follw the order status in my trips page
                            </p>
                            :
                            <>
                                <p className='details'>
                                    Dear Guest,
                                </p>
                                <p>
                                    In order to complete youer reservation, please confirm youer trip details.
                                </p>
                            </>
                        }</div>
                        <br />
                        <div className='reservation-details-contsiner'>
                            <div className='reservation-details'>
                                <h3>Reservation details</h3>
                                <br />
                                <h4>Trip dates:</h4>
                                <div className='details'>
                                    {orderDetails.startDate.replaceAll('-', '/')} - {orderDetails.endDate.replaceAll('-', '/')}
                                </div>
                                <h4>Guests:</h4>
                                <div className='details'>
                                    {adults > 0 &&
                                        <div>
                                            {adults} {`adult${adults > 1 ? 's' : ''}`}
                                        </div>}

                                    {children > 0 &&
                                        <div>
                                            {children} {`child${children > 1 ? 'ren' : ''}`}
                                        </div>}
                                    {infants > 0 &&
                                        <div>
                                            {infants} {`infant${infants > 1 ? 's' : ''}`}
                                        </div>}
                                    {pets > 0 &&
                                        <div>
                                            {pets} {`pet${pets > 1 ? 's' : ''}`}
                                        </div>
                                    }
                                </div>
                                <hr />
                                <h4>Peice Details:</h4>
                                <div>
                                    <div className='peice-details details'>
                                        <div>
                                            ${orderDetails.pricePerNight}X{orderDetails.numberOfNights} nights
                                        </div>
                                        <div>
                                            ${orderDetails.pricePerNight * orderDetails.numberOfNights}
                                        </div>
                                    </div>
                                    <div className='peice-details details'>
                                        <div>
                                            Service fee
                                        </div>
                                        <div>
                                        ${Number(`${orderDetails.taxes}`).toFixed(2)}
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='peice-details details'>
                                    <div>
                                        Total
                                    </div>
                                    <div>
                                    ${Number(`${orderDetails.pricePerNight * orderDetails.numberOfNights + orderDetails.taxes}`).toFixed(2)}
                                        
                                    </div>
                                </div>
                            </div>
                            {console.log(orderDetails)}
                            <div className='img-container'>
                                <img src={orderDetails.stay.imgUrls[0]} alt="" />
                                <h4>{orderDetails.stay.name}</h4>
                                <h4>{orderDetails.stay.loc.country} {orderDetails.stay.loc.city}</h4>
                            </div>
                        </div>
                    </div>
                    {confirmed ?
                        <div className='close-btn-container'>
                            <button onClick={onToggleModal} className="confirm-modal-btn back" >Close</button>
                        </div>
                        :
                        <div className='btn-container'>
                            <button onClick={onConfirmClicked} className="confirm-modal-btn" >Confirm</button>
                            <button onClick={onBackClicked} className="confirm-modal-btn back" >Back</button>
                        </div>
                    }
                </div>
            </div>
        </>
    )





}