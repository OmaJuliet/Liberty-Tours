import React, {useRef} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../Styles/Home Page/destination.css';
import { destinationData } from '../../Data/data';
import { FaArrowRight } from 'react-icons/fa';



function Destination() {
const sliderRef = useRef<Slider>(null);

  const sliderSettings = {
    // dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };



  return (
    <>
      <div className="product-section">
            <div className="container mx-auto flex justify-between mb-4">
              <h1 className="text-black text-2xl text-brandColor font-bold">Top Destinations</h1>
              <div className='controls'>
                <button onClick={handleNext}>
                   <FaArrowRight />
                </button>
              </div>
            </div>
        <Slider ref={sliderRef} {...sliderSettings}>
          {destinationData.map((item) => (
            <div className="card" key={item.id}>
            <div className="card-top">
              <img src={item.linkImg} alt="" />
              <div className="overlay">
                <div className="overlay-content">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
          
          ))}
        </Slider>
    </div>

    </>
  );
}

export default Destination;