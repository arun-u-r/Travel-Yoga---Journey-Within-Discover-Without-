import React from "react";
import Slider from "react-slick";
import pic01 from '../../assets/images/avtar01.jpg'
import pic02 from '../../assets/images/avtar02.jpg'
import pic03 from '../../assets/images/avtar03.jpg'
import pic04 from '../../assets/images/avtar04.jpg'


const Testimonials = () => {

  const settings = {
    dots:true,
    infinite: true,
    autoplay:true,
    swipeToSlide:true,
    speed:1000,
    autoplaySpeed:2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint:992,
        settings: {
          slidesToShow:2,
          slidesToScroll:1,
          infinite:true,
          dots:true,
        },
      },
      {
        breakpoint:576,
        settings:{
          slidesToShow : 1 ,
          slidesToScroll:1,  
        }, 
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta sint
          et, dolore animi doloremque quos delectus dolores nisi odit! Optio in
          repudiandae facere quibusdam culpa nam excepturi eos at iusto.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={pic01} className="w-25 h-25 rounded-2" alt=""/>

        </div>
        <h6 className="mb-0 mt-3">Edward livinston</h6>
        <p>Community member</p>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta sint
          et, dolore animi doloremque quos delectus dolores nisi odit! Optio in
          repudiandae facere quibusdam culpa nam excepturi eos at iusto.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={pic03} className="w-25 h-25 rounded-2" alt=""/>

        </div>
        <h6 className="mb-0 mt-3">Edward livinston</h6>
        <p>Community member</p>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta sint
          et, dolore animi doloremque quos delectus dolores nisi odit! Optio in
          repudiandae facere quibusdam culpa nam excepturi eos at iusto.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={pic02} className="w-25 h-25 rounded-2" alt=""/>

        </div>
        <h6 className="mb-0 mt-3">Roberto Arun</h6>
        <p>Community member</p>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta sint
          et, dolore animi doloremque quos delectus dolores nisi odit! Optio in
          repudiandae facere quibusdam culpa nam excepturi eos at iusto.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={pic04} className="w-25 h-25 rounded-2" alt=""/>

        </div>
        <h6 className="mb-0 mt-3">Roberto Arun</h6>
        <p>Community member</p>
      </div>
    </Slider>
  );
};

export default Testimonials;
