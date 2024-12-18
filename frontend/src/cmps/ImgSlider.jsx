import React, { useState } from "react"
import left from "/src/assets/img/left.svg"
import right from "/src/assets/img/right.svg"


export default function SimpleSlider({ imgUrls, isOnWishList, addToWishList }) {

  const [imgIndex, setImgIndex] = useState(0)
  const [onWishList, setonWishList] = useState(isOnWishList)


  function showPrevImg(ev) {
    ev.stopPropagation()
    if (imgIndex === 0) return
    setImgIndex(index => {
      return imgIndex - 1
    })
  }

  function showNextImg(ev) {
    // debugger
    ev.stopPropagation()
    if (imgIndex === imgUrls.length - 1) return
    setImgIndex(index => {
      return imgIndex + 1
    })
  }

  function onHeartCliked(ev){
    ev.stopPropagation()
    setonWishList(!onWishList)
    addToWishList(onWishList)
  }


  let wishListClass = onWishList ? 'on-wish-list' : ''
  
  

  return (
    <div className="img-slider">
      <svg onClick={(event) => onHeartCliked(event,this)} xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32" aria-hidden="true"
        role="presentation" focusable="false"
        className={`stay-preview-haert-icon ${wishListClass}`}
      ><path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path></svg>
      <div className="img-slider-img-container" >
        {imgUrls.map(url => (
          <img key={url} src={url} className="img-slider-img"
            style={{ translate: `${-100 * imgIndex}%` }} />
        ))}
      </div>
      {imgIndex > 0 &&
        <button onClick={(event)=>showPrevImg(event)} className="btn-img-slider" style={{ left: 0 }}>
          <img src={left} alt="" />
        </button>
      }
      {imgIndex < imgUrls.length - 1 &&
        <button onClick={(event)=>showNextImg(event)} className="btn-img-slider" style={{ right: 0 }}>
          <img src={right} alt="" />
        </button>
      }
      <div className="white-dots">
        {imgUrls.map((_, index) => (
          <button className={`img-slider-dot-btm ${index === imgIndex ? 'selected' : ''}`} key={index} onClick={() => setImgIndex(index)}></button>
        ))}
      </div>
    </div>

  )
}