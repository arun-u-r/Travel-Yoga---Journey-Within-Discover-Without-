import React from 'react'
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';
import weatherImage from '../assets/images/weather.PNG';
import guideImage from '../assets/images/guide.png'
import customizationImage from '../assets/images/customize.png'


const serviceData =[
    {
        imgUrl:weatherImage ,
        title: "Mesmerizing Beauty of Weather",
        desc: "Embrace the elegance of travel, where every journey becomes a symphony of sophistication amidst the backdrop of nature's finest artistry. Discover the charm of timeless travel, where every moment is painted with the hues of sophistication and grace.",
    },
    {
        imgUrl:guideImage ,
        title: "Capturing Timeless Moments",
        desc: "Capture Memories, Let Our Service Paint Your Journey with Timeless Photographs.Discover the Art of Timeless Beauty: Elevate Your Journey with Unforgettable Captures.Capturing Timeless Moments,Paint Your Memories: Let Every Click Tell Your Story",
    },
    {
        imgUrl:customizationImage ,
        title: "Tailored Experiences",
        desc: "Experience travel like never before with our customizable packages, where every detail is meticulously crafted to suit your preferences, ensuring a journey that perfectly aligns with your desires and aspirations.",
    }

]

const ServiceList = () => {
  return (
   <>
   {
    serviceData.map((item, index) => ( 
    <Col lg="3" md='6' sm='12' className='mb-4' key={index}>
        <ServiceCard item={item} />
    </Col>
    ))}
   </>
  )
}

export default ServiceList