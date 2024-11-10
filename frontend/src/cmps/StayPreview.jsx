import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import ImgSlider from './ImgSlider';

export function StayPreview({ stay }) {
// export function StayPreview() {
    const [stayRating, setStayRating] = useState(0)

    useEffect(() => {

        setStayRating(calculateAverageRate())
    }, [])


    // const stay = {
    //     "_id": "s101",
    //     "name": "Ribeira Charming Duplex",
    //     "type": "House",
    //     "imgUrls":
    //         ["/src/assets/img/asset 68.webp",
    //             "/src/assets/img/asset 69.webp",
    //             "/src/assets/img/asset 70.webp",
    //             "/src/assets/img/asset 71.webp",
    //             "/src/assets/img/asset 72.webp",
    //             "/src/assets/img/asset 73.webp",
    //             "/src/assets/img/asset 74.webp",
    //             "/src/assets/img/asset 75.webp",
    //             "/src/assets/img/asset 76.webp",
    //             "/src/assets/img/asset 77.webp",
    //             "/src/assets/img/asset 78.webp",
    //             "/src/assets/img/asset 79.webp",
    //             "/src/assets/img/asset 80.webp",
    //             "/src/assets/img/asset 81.webp",
    //             "/src/assets/img/asset 82.webp",
    //             "/src/assets/img/asset 83.webp",
    //             "/src/assets/img/asset 84.webp",
    //             "/src/assets/img/asset 85.webp",
    //             "/src/assets/img/asset 86.webp",
    //             "/src/assets/img/asset 87.webp",
    //             "/src/assets/img/asset 88.webp"
    //         ],
    //     "price": 80.0,
    //     "summary": "Fantastic duplex apartment...",
    //     "capacity": 8,
    //     "amenities": ["TV", "Wifi", "Kitchen", "Smoking allowed", "Pets allowed", "Cooking basics"],
    //     "labels": ["Top of the world", "Trending", "Play", "Tropical"],
    //     "host": {
    //         "_id": "u101",
    //         "fullname": "Davit Pok",
    //         "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
    //     },
    //     "loc": {
    //         "country": "Portugal",
    //         "countryCode": "PT",
    //         "city": "Lisbon",
    //         "address": "17 Kombo st",
    //         "lat": -8.61308,
    //         "lng": 41.1413
    //     },
    //     "reviews": [
    //         {
    //             "id": "madeId",
    //             "txt": "Very helpful hosts. Cooked traditional...",
    //             "rate": 4,
    //             "by": {
    //                 "_id": "u102",
    //                 "fullname": "user2",
    //                 "imgUrl": "/img/img2.jpg"
    //             }
    //         }
    //     ],
    //     "likedByUsers": ["mini-user"]
    // }

    function addToWishList(isOn) {
        //TODO stay._id 
    }

    function isOnWishList(){
        return true//TODO
    }

    function calculateAverageRate() {
        const { reviews } = stay;

        if (!reviews || reviews.length === 0) {
            return 0
        }

        const totalRate = reviews.reduce((sum, review) => sum + review.rate, 0);
        const averageRate = totalRate / reviews.length;
        console.log(averageRate)
        return averageRate;
    }

    function formatRate(rate) {
        if (Number.isInteger(rate)) {
            return rate.toFixed(1)
        } else {
            return rate.toFixed(2)
        }
    }



    return (


        <article className="stay-preview">
            <div className='slider'>
                <ImgSlider imgUrls={stay.imgUrls} isOnWishList ={true} addToWishList={addToWishList} /> 
                {/* TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! isOnWishList */}
            </div>
            <section className="stay-preview-info">
                <div className="stay-preview-header">
                    <div className="stay-preview-location">
                        <span>
                            {stay.loc.city}, {stay.loc.country}
                        </span>
                    </div>
                    <div>
                        <div className="stay-preview-rating">
                            <img className='stay-preview-star-icon' src={"/src/assets/img/star.svg"} alt="" />
                            {formatRate(stayRating)}
                        </div>
                    </div>
                </div>
                <div className="stay-preview-distance">
                    {stay.summary}
                    {/* {stay.kilometersAway} kilometers away */}
                </div>
                {/* <div className="stay-preview-date-range">{stay.dateRange}</div> */}
                <div className="stay-preview-date-range">Nov 9-14</div>
                <div className="stay-preview-price">
                    <span>${stay.price.toLocaleString()}</span> night
                </div>
            </section>
        </article>
    )
}