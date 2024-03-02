import React from 'react'
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import './tour-card.css'
import calcAvgRating from '../utils/avgRating';


const TourCard = ({tour}) => {

    const { id, title, photo, price, featured, reviews, city } = tour;

    const { toatalRating, avgRating } = calcAvgRating(reviews)

    
  return (
    <div className="tour__card ">
        <Card>
            <div className="tour__img">
                <img src={photo} alt='tour_image'/>
                { featured && <figcaption>Featured</figcaption>}
                
            </div>

            <CardBody>
            <div className="card__top d-flex align-items-center justify-content-between">
                <span className='tour__location d-flex align-items-center gap-1'>
                <i class="ri-road-map-fill"></i> {city}
                </span>
                <span className='tour__rating d-flex align-items-center gap-1'>
                <i class="ri-star-half-fill"></i>
                 {avgRating === 0 ? null : avgRating}
                {toatalRating === 0 ? ("Not Rated") 
                : (<span>({reviews.length})</span>)} 
                
                </span>
            </div>

            <h5 className="tour__title"><Link to={`/tours/${id}`} >{title}</Link></h5>

            <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                <h4>${price} <span>/per person</span></h4>
                <button className= 'btn booking__button'>
                    <Link to={`/tours/${id}`}>Book Now!</Link>
                </button>

            </div>
        </CardBody>
        </Card>

        
    </div>
  )
}

export default TourCard