import React, { useState } from 'react'
import { SliderData } from './SliderData';

export const MainPageSlider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    if (slideIndex !== SliderData.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === SliderData.length) {
      setSlideIndex(1);
    }
  }
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(SliderData.length);
    }
  }

  return (
    <div className="slider_container_main">
      <div className="slider_container">
        {SliderData.map((slide, index) => {
          return (
            <div className={slideIndex === index + 1 ? 'slider_card active_slide_img' : 'slider_card'} key={index} >
              <img src={slide.image} alt="" />
            </div>
          )
        })}
      </div>
      {/* <button onClick={() => { prevSlide() }}><i className="fa fa-angle-left" aria-hidden="true"></i></button>
      <button onClick={() => { nextSlide() }}><i className="fa fa-angle-right" aria-hidden="true"></i></button> */}
    </div>
  )
}

{/* <div className="slider_tex_btn">
  <p>Grab Upto 50% Off On Selected headphone</p>
  <a href="#">Buy Now</a>
</div> */}