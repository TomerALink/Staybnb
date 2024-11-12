import { utilService } from '../../services/util.service.js'


export function StayDetailsReviews({ reviews }) {
    const avgRating = utilService.calcAvgRating(reviews)
    const numReviews = !!reviews.length ? reviews.length : 0
    const maxShowReviews = 6

    const [showAll, setShowAll] = useState(false)

    function onToggleModal() {
        setShowAll(!showAll)
    }

    if (numReviews > 0) {
        return (
            <div className="stay-reviews" id="reviews">
                <span className="reviews-main-header">
                    <img src="/src/assets/img/star.svg" alt="star-icon" />
                    {avgRating}{' · '}{utilService.pluralize(numReviews, 'reviews')}
                </span>

                <div className="reviews-list">
                    {reviews.slice(0, maxShowReviews).map((review, index) => (
                        <article className="review" key={index}>
                            <div className="review-user-info">
                                <img src={review.by.imgUrl} alt="user-image" />
                                <p className="user-concise-info">
                                    <span className="user-name">{review.by.fullname}</span>
                                    <span className='user-record'>{utilService.getRandomIntInclusive(2, 8)} years on Airbnb</span>
                                </p>
                            </div>

                            <div className="review-concise-info">
                                <span className="rating-stars">
                                    {[...Array(Math.round(avgRating))].map((_, index) => (
                                        <img key={index} src="/src/assets/img/star.svg" className="present-star" alt="star icon" />
                                    ))}
                                    {[...Array(5 - Math.round(avgRating))].map((_, index) => (
                                        <img key={index} src="/src/assets/img/star.svg" className="missing-star" alt="star icon" />
                                    ))}
                                </span>
                                {' · '}
                                <span className="review-month">{utilService.getMonthReview(review.at)}</span>
                                {' · '}
                                <span className="review-duration">{utilService.getRandomStayDurationReview()}</span>
                            </div>
                            <div className="review-content">
                                <p>{reviewToShow(review.txt)}</p>
                                {/* here should be a condition to */}
                                <button className="show-all-reviews" onclick={onToggleModal}>Read more</button>
                            </div>
                        </article>
                    ))}
                </div>


                {/* entrer condition more than 6 reviews */}
                <button className="show-all-reviews" onClick={onToggleModal}>
                    {`Show all ${reviews.length} reviews`}
                </button>

                {
                    showAll && (
                        <div className="reviews-modal-overlay" onClick={onToggleModal}>
                            <div className="reviews-modal" onClick={(ev) => ev.stopPropagation()}>
                                <button onClick={onToggleModal} className="close-btn">
                                    <img src="/src/assets/img/close.svg" alt="close-icon" />
                                </button>

                                <div className="stay-reviews" id="reviews">
                                    <span className="reviews-main-header">
                                        <img src="/src/assets/img/star.svg" alt="star-icon" />
                                        {avgRating}{' · '}{utilService.pluralize(numReviews, 'reviews')}
                                    </span>

                                    <div className="reviews-list">
                                        {reviews.map((review, index) => (
                                            <article className="review" key={index}>
                                                <div className="review-user-info">
                                                    <img src={review.by.imgUrl} alt="user-image" />
                                                    <p className="user-concise-info">
                                                        <span className="user-name">{review.by.fullname}</span>
                                                        <span className='user-record'>{utilService.getRandomIntInclusive(2, 8)} years on Airbnb</span>
                                                    </p>
                                                </div>

                                                <div className="review-concise-info">

                                                    <span className="rating-stars">
                                                        {[...Array(Math.round(avgRating))].map((_, index) => (
                                                            <img key={index} src="/src/assets/img/star.svg" className="present-star" alt="star icon" />
                                                        ))}
                                                        {[...Array(5 - Math.round(avgRating))].map((_, index) => (
                                                            <img key={index} src="/src/assets/img/star.svg" className="missing-star" alt="star icon" />
                                                        ))}
                                                    </span>
                                                    {' · '}
                                                    <span className="review-month">{utilService.getMonthReview(review.at)}</span>
                                                    {' · '}
                                                    <span className="review-duration">{utilService.getRandomStayDurationReview()}</span>
                                                </div>
                                                <div className="review-content">
                                                    <p>{review.txt}</p>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        )
    } else {
        return (
            <div className="stay-reviews" id="reviews">
                <span className="reviews-main-header"> New place </span>
            </div>
        )
    }
}













