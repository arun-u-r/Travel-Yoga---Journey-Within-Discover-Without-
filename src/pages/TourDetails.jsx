import React, { useEffect, useRef, useState } from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, ListGroup, Form } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/Tour.js";
import calcAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.png";
import Booking from "../components/Booking/Booking";
import NewsLetter from "../shared/NewsLetter";


const TourDetails = () => {
  const { id } = useParams();
  const reviewRef = useRef("");
  const [tourRating, setTourRating] = useState(null);

  const tour = tourData.find( tour => tour.id===id);
  
  
  //  const { loading, error } = useFetch
  // (`${BASE_URL}/tours/${id}`);
  // destructre prop of  tour obj
  const {
    photo,
    title,
    address,
    price,
    reviews,
    city,
    desc,
    distance,
    maxGroupSize,
  } = tour;
  // console.log("price==>",price)

  const { toatalRating, avgRating } = calcAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  //submit to the server
  const submitHandler = (event) => {
    event.preventDefault();
    const reviewText = reviewRef.current.value;
    alert(`${reviewText}, ${tourRating}`);

    // call api
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  return (
    <>
      <section>
        <Container>
          {/* {loading && <Loading />} */}
          {/* {error && <h4 className="text-center pt-5">{error}</h4>} */}
          {/* {!loading && !error && ( */}
            <Row>
              <Col lg="8">
                <div className="tour__content">
                  <img src={photo} alt="tourImage" />
                  <div className="tour__info">
                    <h2>{title} </h2>
                    <div className="d-flex align-items-center gap-4">
                      <span className="tour__rating d-flex align-items-center gap-1">
                        <i class="ri-star-half-fill"></i>
                        {avgRating === 0 ? null : avgRating}
                        {toatalRating === 0 ? (
                          "Not Rated"
                        ) : (
                          <span>({reviews?.length})</span>
                        )}
                      </span>
                      <span>
                        <i class="ri-map-pin-range-fill"></i> {address}
                      </span>
                    </div>
                    <div className="tour__extra_contents ">
                      <span>
                        <i class="ri-building-fill"></i> {city}
                      </span>
                      <span>
                        <i class="ri-map-pin-time-fill"></i> {distance} k/m
                      </span>
                      <span>
                        <i class="ri-money-dollar-circle-fill"></i>${price}/-
                        per person
                      </span>
                      <span>
                        <i class="ri-group-fill"></i>
                        {maxGroupSize} people
                      </span>
                    </div>
                    <h5>Description</h5>
                    <p>{desc}</p>
                  </div>
                  {/* ####################review section ###################### */}
                  <div className="tour__reviews mt-4">
                    <h4>Reviews({reviews?.length} reviews)</h4>
                    <Form onSubmit={submitHandler}>
                      <div className="rating__group d-flex align-items-center gap-4 mt-4">
                        <span onClick={() => setTourRating(1)}>
                          1.<i class="ri-star-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(2)}>
                          2.<i class="ri-star-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(3)}>
                          3.<i class="ri-star-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(4)}>
                          4.<i class="ri-star-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(5)}>
                          5.<i class="ri-star-fill"></i>
                        </span>
                      </div>

                      <div className="review__input mt-3">
                        <input
                          ref={reviewRef}
                          type="text"
                          placeholder="Share your Feelings..."
                          required
                        />
                        <button
                          className="review__submit_btn text-white"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </Form>

                    <ListGroup className="user__review">
                      {reviews?.map((review,) => (
                        <div className="review__item" key={review.length}>
                          <img src={avatar} alt="avatar" />
                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h4>Arun</h4>
                                <p>
                                  {new Date("08/8/2023").toLocaleDateString(
                                    "en-US",
                                    options
                                  )}
                                </p>
                              </div>
                              <span className="d-flex align-items-center">
                                5.(<i class="ri-star-s-fill"></i>)
                              </span>
                            </div>
                            <h6>fabulous experience</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                  {/* ######################################### */}
                </div>
              </Col>
              <Col lg="4">
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          {/* )} */}
        </Container>
        <NewsLetter />
      </section>
    </>
  );
};

export default TourDetails;
