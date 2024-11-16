import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ImgSlider from './ImgSlider'
import { utilService } from '../services/util.service'
import { stayService } from '../services/stay.service'

export function StayPreview({currentPos, stay }) {

    // const [stayRating, setStayRating] = useState(0)

    useEffect(() => {

        // setStayRating(calculateAverageRate())
    }, [])


    function addToWishList(isOn) {
        //TODO stay._id 
    }

    function isOnWishList(){
        return false//TODO
    }

    function calculateAverageRate() {
        const { reviews } = stay;
        if (!reviews || reviews.length === 0) {
            return 0
        }
        const totalRate = reviews.reduce((sum, review) => sum + review.rate, 0)
        const averageRate = totalRate / reviews.length; 
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
                <ImgSlider imgUrls={stay.imgUrls} isOnWishList ={isOnWishList} addToWishList={addToWishList} /> 
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
                            {/* {formatRate(stayRating)} */}
                            {utilService.getRandomDecimal()}
                        </div>
                    </div>
                </div>
                <div className="stay-preview-distance">
                
                    {/* {stay.summary} */}
                    {console.log(currentPos)}
                    {stayService.calculateDistance(currentPos.latitude , currentPos.longitude, stay.loc.lat, stay.loc.lan)} kilometers away
                </div>
                {/* <div className="stay-preview-date-range">{stay.dateRange}</div> */}
                <div className="stay-preview-date-range">Nov 17-{utilService.getRandomIntInclusive(20,30)}</div>
                <div className="stay-preview-price">
                    <span>${stay.price.toLocaleString()}</span> night
                </div>
            </section>
        </article>
    )
}