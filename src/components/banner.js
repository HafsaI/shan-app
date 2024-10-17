import React, { useRef } from "react";
import { Carousel, Button } from "antd";
import "./banner.css";

const Banner = () => {
  const carouselRef = useRef(null);

  // Function to move to the next slide
  const goToNextSlide = () => {
    carouselRef.current.next(); // Moves to the next slide
  };
  return (
    <Carousel ref={carouselRef}>
      {/* Slide 1 */}
      <div className="banner-slide">
        <div className="banner-container">
          <div className="text-content">
            <h2 className="title-1">In partnership with</h2>
            <div>
              <p className="title-2">CHEF SUJAN </p>
              <p className="title-sub">of BAAR BAAR</p>
            </div>
            {/* <h1 className='title-2'>CHEF SUJAN <br/>of BAAR BAAR</h1> */}
            <Button
              type="primary"
              size="large"
              className="cta-button"
              onClick={goToNextSlide}
            >
              About Chef Sujan
            </Button>
          </div>
          <div className="image-content">
            <img src="/images/man2.png" alt="Chef Sujan" />
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="banner-slide">
        <div className="banner-container">
          <div className="image-content2">
            <img src="/images/man1.png" alt="Indian Cuisine" />
          </div>
          <div className="text-content">
            <div>
              <p className="title-2">MEET</p>
              <p className="title-2">CHEF SUJAN </p>
              <p className="para-text">
                Chef Sujan Sarkar of Baar Baar NYC, celebrated for his modern
                Indian creations, has teamed up with Shan Foods to craft these
                exclusive appetisers just for you! Bringing together Shan’s
                iconic spices with Chef Sujan’s innovative touch, these recipes
                are made to inspire so YOU CAN RECREATE AT HOME
              </p>
            </div>
            {/* <h1 className='title-2'>CHEF SUJAN <br/>of BAAR BAAR</h1> */}
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;

