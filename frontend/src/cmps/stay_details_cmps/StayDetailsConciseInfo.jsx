
import { utilService } from '../../services/util.service.js'

export function StayDetailsConciseInfo({ type, loc, capacity, bedrooms, bathrooms, avgRating, numReviews }) {
    return (
        
        <div className="stay-concise-info">

            <p className="stay-concise-location">
                {type} in {loc.city}, {loc.country}
            </p>

            <p className="stay-concise-capacity">
                {utilService.pluralize(capacity, 'guest')}{' · '}
                {utilService.pluralize(bedrooms, 'bedroom')}{' · '}
                {utilService.pluralize(bedrooms, 'bed')}{' · '}
                {utilService.pluralize(bathrooms, 'bath')}
            </p>

            {(numReviews > 0) && (
                <p className="stay-concise-rate">
                    <img src="/src/assets/img/star.svg" alt="star-icon" />
                    {avgRating}{' · '}

                    < a href="#reviews" className="reviews-link">
                        {utilService.pluralize(numReviews, 'review')}
                    </a>
                </p>
            )}

            {(!numReviews || numReviews === 0) && (
                <p className="stay-concise-rate">
                    {avgRating}
                </p>
            )}


        </div >
    )
}


