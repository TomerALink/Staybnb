import { utilService } from "../../services/util.service.js"
import star from "/src/assets/img/star.svg"
import laurel_left from "/src/assets/img/laurel-left.svg"
import laurel_right from "/src/assets/img/laurel-right.svg"

export function StayDetailsHostInfo({ host, avgRating, numReviews }) {
    return (
        <div className="stay-host-info">

            {(host.isSuperhost) && (
                < div className="guest-favorite">
                    <div className="guest-favorite-icon">
                        <img src={laurel_left} alt="laurel icon" />
                        <span className="label-text">Guest favorite</span>
                        <img src={laurel_right} alt="laurel icon" />
                    </div>
                    <div className="guest-favorite-text">
                        One of the most loved homes on Airbnb, according to guests
                    </div>
                    <div className="guest-favorite-info">
                        <div className="rating">
                            <span className="rating-value">{avgRating}</span>
                            <span className="rating-stars">
                                {[...Array(Math.round(avgRating))].map((_, index) => (
                                    <img key={index} src={star} alt="star icon" />
                                ))}
                            </span>
                        </div>
                        <div className="divider"></div>
                        <div className="reviews">
                            <span className="review-count">{numReviews}</span>
                            <a href="#reviews" className="review-text">{utilService.pluralize(numReviews, 'Review').split(' ')[1]}</a>
                        </div>
                    </div>
                </div >
            )}

            <div className="host-concise-info">
                <img src={host.picture} alt="host image" />
                <p>
                    <span className="host-hosted-by">
                        {`Hosted by ${host.fullname}`}
                    </span>
                    <span className="host-hosted-years">
                        {(host.isSuperhost) && ('SuperHost · ')}
                        {utilService.getRandomIntInclusive(2, 6)} years hosting
                    </span>
                </p>
            </div>

        </div >
    )
}