import React, { useState } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem } from "reactstrap";
import { useNavigate } from "react-router-dom";


const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;

  const navigate = useNavigate();


  const [credentials, setCredentials] = useState({
    userId: "01",
    userEmail: "test@Gmail.com",
    fullName: "",
    phone: "",
    guestSize: 1,
    bookingAt: "",
  });

  const handleChange = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const serviceCharge = 10;
  const totalAmount =
    Number(price) * Number(credentials.guestSize) + Number(serviceCharge);

  //sendin data to the server
  const handleClick = (e) => {
    e.preventDefault();
    navigate('/thank-you')
  };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price}
          <span>/per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center">
          <i class="ri-star-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>
      {/* ##################### booking form ################# */}
      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info_form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full name.."
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone.."
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookingAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="No of Guest"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      <div className="booking__bottom mb-4">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price} <i class="ri-close-line"></i>{credentials.guestSize} Person =
            </h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service Charge =</h5>
            <span>$10</span>
          </ListGroupItem>
          <ListGroupItem className="total border-0 px-0">
            <h5>Total =</h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
        <button
          className="booking__btn w-100 mt-4 text-white"
          onClick={handleClick}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Booking;
