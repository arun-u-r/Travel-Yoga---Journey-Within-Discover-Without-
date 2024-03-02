import React, { useEffect, useState } from "react";
import TourCard from "../../shared/TourCard";
import { Col } from "reactstrap";
import useFetch from "../../hooks/useFetch.js";
// import { BASE_URL } from "../../utils/config.js";
import tourData from "../../assets/data/Tour.js"

const FeaturedTourList = () => {
  const {
    data: 
    // featuredTour,
    loading,
    error,
  } = useFetch

  // (`${BASE_URL}/tours/search/getFeaturedTour`);
    // console.log(featuredTour);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const toursPerPage = 8;
  
    useEffect(() => {
      const pages = Math.ceil(tourData.length / toursPerPage);
      setPageCount(pages);
    }, []);
  
    const handlePageClick = (pageNumber) => {
      setPage(pageNumber);
    };
  
    const startIndex = page * toursPerPage;
    const endIndex = startIndex + toursPerPage;
    const toursToShow = tourData.slice(startIndex, endIndex);
  return (
    <>
      {loading && <h4>Loading..........</h4>}
      {error && <h4>{error}</h4>}
      { !loading &&
      !error && toursToShow?.map((tour) => (
        <Col lg="3" md='6' sm='6' className="mb-4" key={tour.id}>
          <TourCard tour={tour} />
        </Col>
      ))}
      <Col lg="12">
        <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-4">
          {[...Array(pageCount).keys()].map((number) => (
            <span
              key={number}
              onClick={() => handlePageClick(number)}
              className={page === number ? "active__page" : ""}
            >
              {number + 1}
            </span>
          ))}
        </div>
      </Col>
    </>
  );
};

export default FeaturedTourList;
