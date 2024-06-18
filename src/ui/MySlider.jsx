import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import "../css/arrow.css"


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="flex z-10"
      
    >
      <button onClick={onClick} className='left-slider'>
      <IoIosArrowDropright />
      </button>
      </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
      <button onClick={onClick} 
      className="z-10 right-0">
      <IoIosArrowDropleft className='size-15'/>
      </button>
  );
}

export default function MySlider({bestProducts}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,

      };
      return (
        <div className='flex flex-col items-center'>
        <Slider {...settings} className='w-slider'>
          <div className='border-footer mr-4'>
          <img src={bestProducts[0].url} slt="1" className='w-sw h-sh' />
          </div>
          <img src={bestProducts[1].url} alt="2" className='w-sw h-sh'/>
          <img src={bestProducts[2].url} alt="3" className='w-sw h-sh'/>
          <img src={bestProducts[3].url} alt="4" className='w-sw h-sh'/>
          <img src={bestProducts[4].url} alt="5" className='w-sw h-sh'/>
          <img src={bestProducts[5].url} alt="6" className='w-sw h-sh'/>
          <img src={bestProducts[6].url} alt="7" className='w-sw h-sh'/>
          <img src={bestProducts[7].url} alt="8" className='w-sw h-sh'/>
          <img src={bestProducts[8].url} alt="9" className='w-sw h-sh'/>
        </Slider>
        </div>
      );
}

