import { utilService } from "../../services/util.service.js"

export function StayDetailsHostInfo({ host, avgRating, numReviews }) {
    console.log('avg rating', avgRating)
    return (
        <div className="stay-host-info">

            {(host.isSuperhost) && (
                < div className="guest-favorite">
                    <div className="guest-favorite-icon">
                        <img src="/src/assets/img/laurel-left.svg" alt="laurel icon" />
                        <span className="label-text">Guest favorite</span>
                        <img src="/src/assets/img/laurel-right.svg" alt="laurel icon" />
                    </div>
                    <div className="guest-favorite-text">
                        One of the most loved homes on Airbnb, according to guests
                    </div>
                    <div className="guest-favorite-info">
                        <div className="rating">
                            <span className="rating-value">{avgRating}</span>
                            <span className="rating-stars">
                                {[...Array(Math.floor(avgRating))].map((_, index) => (
                                    <img key={index} src="/src/assets/img/star.svg" alt="star icon" />
                                ))}
                            </span>
                        </div>
                        <div className="divider"></div>
                        <div className="reviews">
                            <span className="review-count">{numReviews}</span>
                            <span className="review-text">Reviews</span>
                        </div>
                    </div>
                </div >
            )}

            <div className="host-concise-info">
                <img src={host.imgUrl} alt="host image" />
                <p>
                    <span className="host-hosted-by">
                        {`Hosted by ${host.fullname}`}
                    </span>
                    <span  className="host-hosted-years">
                        {(host.isSuperhost) && ('SuperHost · ')}
                        {utilService.getRandomIntInclusive(2, 6)} years hosting
                    </span>
                </p>
            </div>

        </div >
    )
}