import { utilService } from '../../services/util.service.js'
import { useState } from 'react'

export function StayDetailsReviews({ reviews }) {
    const avgRating = utilService.calcAvgRating(reviews)
    const numReviews = !!reviews.length ? reviews.length : 0
    const maxShowReviews = 6
    const maxLenReview = 150

    const [showAll, setShowAll] = useState(false)

    function onToggleModal() {
        setShowAll(!showAll)
    }

    function reviewToShow(reviewTxt) {
        const isLongText = reviewTxt.length > maxLenReview
        const textToShow = (!isLongText) ? reviewTxt : (reviewTxt.substring(0, maxLenReview)) + '...'
        return (
            <div className="review-content">
                <p>{textToShow}</p>
                {isLongText && (<button className="show-all-reviews" onClick={onToggleModal}>Show more</button>)}
            </div>
        )
    }

    if (numReviews > 0) {
        return (
            <div className="stay-reviews" id="reviews">
                <span className="reviews-main-header">
                    <img src="/src/assets/img/star.svg" alt="star-icon" />
                    {avgRating}{' · '}{utilService.pluralize(numReviews, 'review')}
                </span>

                <div className="reviews-list">
                    {/* {reviews.slice(0, maxShowReviews).map((review, index) => ( */}
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
                                    {/* {[...Array(Math.round(review.rate))].map((_, index) => (
                                        <img key={index} src="/src/assets/img/star.svg" className="present-star" alt="star icon" />
                                    ))}
                                    {[...Array(5 - Math.round(review.rate))].map((_, index) => (
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 32 32" aria-hidden="true"
                                            role="presentation" focusable="false"
                                            className="missing-star"
                                            key={index}
                                        >
                                            <path d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"></path>
                                        </svg>
                                    ))} */}
                                </span>
                                {' · '}
                                <span className="review-month">{utilService.getMonthReview(review.at)}</span>
                                {' · '}
                                <span className="review-duration">{utilService.getRandomStayDurationReview()}</span>
                            </div>
                            {reviewToShow(review.txt)}
                        </article>
                    ))}
                </div>

                {(numReviews > maxShowReviews) && (
                    <button className="show-all-reviews" onClick={onToggleModal}>
                        {`Show all ${reviews.length} reviews`}
                    </button>
                )}

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
                                        {/* {avgRating} */}
                                        {' · '}{utilService.pluralize(numReviews, 'review')}
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
                                                        {/* {[...Array(Math.round(review.rate))].map((_, index) => (
                                                            <img key={index} src="/src/assets/img/star.svg" className="present-star" alt="star icon" />
                                                        ))}
                                                        {[...Array(5 - Math.round(review.rate))].map((_, index) => (
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 32 32" aria-hidden="true"
                                                                role="presentation" focusable="false"
                                                                className="missing-star"
                                                            >
                                                                <path d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"></path>
                                                            </svg>
                                                        ))} */}
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













