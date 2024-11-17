import { loadStay } from '../store/actions/stay.actions'

import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { utilService } from '../services/util.service.js'
import { StayDetailsShareSave } from '../cmps/stay_details_cmps/StayDetailsShareSave.jsx'
import { StayDetailsGallery } from '../cmps/stay_details_cmps/StayDetailsGallery.jsx'
// import { StayDetailsHeader } from '../cmps/stay_details_cmps/StayDetailsHeader.jsx'
import { StayDetailsConciseInfo } from '../cmps/stay_details_cmps/StayDetailsConciseInfo.jsx'
import { StayDetailsHostInfo } from '../cmps/stay_details_cmps/StayDetailsHostInfo.jsx'
// import { StayDetailsHostSummary } from '../cmps/stay_details_cmps/StayDetailsHostSummary.jsx'
import { StayDetailsAmenities } from '../cmps/stay_details_cmps/StayDetailsAmenities.jsx'
// import { StayDetailsReservation } from '../cmps/stay_details_cmps/StayDetailsReservation.jsx'
import { StayDetailsReviews } from '../cmps/stay_details_cmps/StayDetailsReviews.jsx'
import { useSelector } from 'react-redux'
// import { StayDetailsMap } from '../cmps/stay_details_cmps/StayDetailsMap.jsx'


export function StayDetails() {

    const { stayId } = useParams()
    const stay = useSelector(storeState => storeState.stayModule.stay)
    const isLoading = useSelector(storeState => storeState.stayModule.isLoading)

    useEffect(() => {
        onloadStay(stayId)        
    }, [stayId])
    
    const avgRating = utilService.calcAvgRating()

    async function onloadStay(stayId) {
        return await loadStay(stayId)
    }
   
    return (
        <>
        {isLoading && 'Loading...'}
    
            {stay &&
            (
                <section className="stay-details">
                    <StayDetailsShareSave name={stay.name} />
                    <StayDetailsGallery imgs={stay.imgUrls} />
                    {/* <StayDetailsHeader stay={stay} /> */}
                    <section className="stay-main-info">
                        <StayDetailsConciseInfo type={stay.type} loc={stay.loc} capacity={stay.capacity} bedrooms={stay.bedrooms} bathrooms={stay.bathrooms} avgRating={avgRating} numReviews={stay.reviews.length} />
                        <StayDetailsHostInfo host={stay.host} avgRating={avgRating} numReviews={stay.reviews.length} />
                        {/* <StayDetailsHostSummary stay={stay} /> */}
                        <StayDetailsAmenities amenities={stay.amenities} />
                        
                        {/* <StayDetailsReservation stay={stay} /> */}
                    </section>
                    <section className="stay-additional-info">
                        <StayDetailsReviews reviews={stay.reviews} />
                        {/* <StayDetailsMap stay={stay} /> */}
                    </section>
                </section>)
            }
        </>
    )

}