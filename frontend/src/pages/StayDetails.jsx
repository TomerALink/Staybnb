import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { utilService } from '../services/util.service.js'
import { StayDetailsShareSave } from '../cmps/stay_details_cmps/StayDetailsShareSave.jsx'
import { StayDetailsGallery } from '../cmps/stay_details_cmps/StayDetailsGallery.jsx'
// import { StayDetailsHeader } from '../cmps/stay_details_cmps/StayDetailsHeader.jsx'
import { StayDetailsConciseInfo } from '../cmps/stay_details_cmps/StayDetailsConciseInfo.jsx'
import { StayDetailsHostInfo } from '../cmps/stay_details_cmps/StayDetailsHostInfo.jsx'
// import { StayDetailsHostSummary } from '../cmps/stay_details_cmps/StayDetailsHostSummary.jsx'
// import { StayDetailsAmenities } from '../cmps/stay_details_cmps/StayDetailsAmenities.jsx'
// import { StayDetailsReservation } from '../cmps/stay_details_cmps/StayDetailsReservation.jsx'
// import { StayDetailsReviews } from '../cmps/stay_details_cmps/StayDetailsReviews.jsx'
// import { StayDetailsMap } from '../cmps/stay_details_cmps/StayDetailsMap.jsx'


export function StayDetails() {

    const stay = {
        "_id": "s101",
        "name": "Ribeira Charming Duplex",
        "type": "House",
        "imgUrls":
            ["/src/assets/img/asset 68.webp",
                "/src/assets/img/asset 69.webp",
                "/src/assets/img/asset 70.webp",
                "/src/assets/img/asset 71.webp",
                "/src/assets/img/asset 72.webp",
            ],
        "price": 80.0,
        "summary": "Fantastic duplex apartment...",
        "capacity": 8,
        "bathrooms": 2,
        "bedrooms": 4,
        "amenities": ["TV", "Wifi", "Kitchen", "Smoking allowed", "Pets allowed", "Cooking basics"],
        "labels": ["Top of the world", "Trending", "Play", "Tropical"],
        "host": {
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "/src/assets/img/asset 109.webp",
            "isSuperhost": true
        },
        "loc": {
            "country": "Portugal",
            "countryCode": "PT",
            "city": "Lisbon",
            "address": "17 Kombo st",
            "lat": -8.61308,
            "lng": 41.1413
        },
        "reviews": [
            {
                "id": "madeId",
                "txt": "Very helpful hosts. Cooked traditional...",
                "rate": 4,
                "by": {
                    "_id": "u102",
                    "fullname": "user2",
                    "imgUrl": "/src/assets/img/asset 73.webp"
                }
            }
        ],
        "likedByUsers": ["mini-user"]
    }
    const avgRating = utilService.calcAvgRating(stay.reviews)

    return (
        <section className="stay-details">
            <StayDetailsShareSave name={stay.name} />
            <StayDetailsGallery imgs={stay.imgUrls} />
            {/* <StayDetailsHeader stay={stay} /> */}
            <section className="stay-main-info">
                <StayDetailsConciseInfo type={stay.type} loc={stay.loc} capacity={stay.capacity} bedrooms={stay.bedrooms} bathrooms={stay.bathrooms} avgRating={avgRating} numReviews={stay.reviews.length} />
                <StayDetailsHostInfo host={stay.host} avgRating={avgRating} numReviews={stay.reviews.length} />
                {/* <StayDetailsHostSummary stay={stay} /> */}
                {/* <StayDetailsAmenities stay={stay} /> */}
                {/* <StayDetailsReservation stay={stay} /> */}
            </section>
            <section className="stay-additional-info">
                {/* <StayDetailsReviews stay={stay} /> */}
                {/* <StayDetailsMap stay={stay} /> */}
            </section>
        </section>
    )

}


// return (
//     <section className="stay-details main-layout">
//         <section className="stay-info-container">
            // <div className="stay-info">
            //     <div className="stay-summary">
            //         <h2>
            //             {stay.type} in {stay.loc.city}, {stay.loc.country}
            //         </h2>
            //         <p className="stay-details-list">
            //             {pluralize(stay.capacity, 'guest')} ·{' '}
            //             {pluralize(stay.bedrooms, 'bedroom')} ·{' '}
            //             {pluralize(stay.beds, 'bed')} · {pluralize(stay.baths, 'bath')}
            //         </p>
            //         <div className="rating-reviews">
            //             <span className="star-icon">
            //                 <img src={amenityIcons.star} alt="Star icon" />
            //             </span>
            //             <span className="rating">{averageRating}</span>
            //             {reviewCount > 0 && (
            //                 <>
            //                     <span className="separator">·</span>
            //                     <a href="#reviews" className="reviews-link">
            //                         {pluralize(reviewCount, 'review')}
            //                     </a>
            //                 </>
            //             )}
            //         </div>
            //     </div>
//                 <div className="stay-host-details">
//                     <GuestFavorite rating={averageRating} reviewCount={stay.reviews.length} />
//                     <div className="host">
//                         {stay.host &&
//                             typeof stay.host === 'object' &&
//                             stay.host.imgUrl && (
//                                 <img src={stay.host.imgUrl} alt="Host" className="host-img" />
//                             )}
//                         <div className="host-info">
//                             <div>
//                                 Hosted by{' '}
//                                 {typeof stay.host === 'object'
//                                     ? stay.host.fullname
//                                     : stay.host}
//                             </div>
//                             <div className="host-duration">
//                                 {getRandomIntInclusive(2, 6)} years hosting
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="stay-description">
//                     <p>{stay.summary}</p>
//                 </div>
//                 <div>

//                     <Amenities amenities={stay.amenities} amenityIcons={amenityIcons} />
//                 </div>
//             </div>


//             <div className="stay-reservation">
//                 <StayReservation
//                     stay={stay}
//                     guestCount={guestCount}
//                     initialStartDate={initialStartDate}
//                     initialEndDate={initialEndDate}
//                 />
//             </div>
//         </section>


//         <section id="reviews" className="header-reviews">
//             <div className="header">★ {averageRating} · {reviewCount} reviews</div>
//             <div className="reviews-container">
//                 {reviewsToShow.map((review, index) => (
//                     <article className="review" key={index}>
//                         <div className="user">
//                             <img src={review.by.imgUrl} alt="User Avatar" />
//                             <div className="user-details-txt">
//                                 <h3>{review.by.fullname}</h3>
//                                 <p className='review-user'>{getRandomIntInclusive(2, 8)} years on Airbnb</p>
//                             </div>
//                         </div>
//                         <div className="review-txt-date">
//                             <div className="review-rating">
//                                 <p>
//                                     ★★★★★<span></span>
//                                 </p>
//                                 <h6>·</h6>
//                                 {/* <p>{getRandomIntInclusive(1,11)} months ago</p> */}
//                                 <p>{getRandomMonth()}</p> <h6>·</h6>
//                                 <p className="stay-description">{getRandomStayDescription()}</p>
//                             </div>
//                             <div className="review-content">
//                                 <p>{review.txt}</p>
//                             </div>
//                         </div>
//                     </article>
//                 ))}
//             </div>
//             <button className="show-all-reviews" onClick={toggleShowAllReviews}>
//                 {showAllReviews ? `Show less` : `Show all ${stay.reviews.length} reviews`}
//             </button>
//         </section>
//         <section id="location">
//             <div className="map-container">
//                 <article>
//                     <h1>Where you'll be</h1>
//                     <div className="map">
//                         <Map stay={stay} />
//                     </div>
//                     <div className="city-info">
//                         {stay.loc.country} · {stay.loc.city} · {stay.loc.address}
//                     </div>
//                 </article>
//             </div>
//         </section>
//     </section>
// )
