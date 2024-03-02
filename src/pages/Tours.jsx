import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import CommonSection from "../shared/CommonSection.jsx";
import "../styles/tours.css";
import TourCard from "../shared/TourCard.jsx";
import NewsLetter from "../shared/NewsLetter.jsx";
import SearchBar from "../shared/SearchBar.jsx";
import tourData from '../assets/data/Tour.js';
// import useFetch from "../hooks/useFetch.js";
// import { BASE_URL } from "../utils/config.js";
// import Loading from "../components/Loader/Loading.jsx";

const Tours = () => {
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const toursPerPage = 8;

  // const {
  //   data: tours,
  //   loading,
  //   error,
  // } = useFetch
  // (`${BASE_URL}/tours?page=${page}`);
  // const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  useEffect(() => {
    
      const pages = Math.ceil(tourData.length / toursPerPage);
      setPageCount(pages);
      // window.scrollTo(0, 0);
  }, [page]);

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  const startIndex = page * toursPerPage;
  const endIndex = startIndex + toursPerPage;
  const toursToShow = tourData.slice(startIndex, endIndex);


  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          {/* {loading && <Loading/>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && ( */}
            <Row>
              {toursToShow?.map(tour=> (
                <Col lg="3" md='6' sm='6' className="mb-5" key={tour.id}>
                  <TourCard tour={tour} />
                </Col>
              ))}
            </Row>
          {/* )} */}
          <Col lg="12">
            <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-4">
              {[...Array(pageCount).keys()].map(number => (
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
        </Container>
      </section>
      <NewsLetter />
    </>
  );
};

export default Tours;
