import React, { useRef } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";
import { toast } from "react-toastify";
// import { BASE_URL } from "./../utils/config.js";
// import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const loactionRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);
  // const navigate = useNavigate();

  const searchHandler = async () => {
    const location = loactionRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === "" || distance === "" || maxGroupSize === "") {
      return toast.warning("All fields are required!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  //   const res = await fetch(
  //     `${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
  //   );
  //   if(!res.ok) alert("somethging went wrong");

  //   const result = await res.json();
  //       // console.log(result)
  //   navigate(
  //     `/tours/search?city=${location}&distance=${distance}&maxGroupSize${maxGroupSize}`,
  //     { state: result.data }
  //   );
   };

  return (
    <div className="search__bar">
        <Col lg="6" md='12' sm='12' >
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast ">
            <span>
              <i class="ri-map-pin-range-line"></i>
            </span>
            <div>
              <label>Location</label>
              <input
                type="text"
                placeholder="Where to?"
                ref={loactionRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast ">
            <span>
              <i class="ri-map-pin-time-line"></i>
            </span>
            <div>
              <label>Distance</label>
              <input
                type="number"
                placeholder="In km"
                ref={distanceRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-last ">
            <span>
              <i class="ri-team-line"></i>
            </span>
            <div>
              <label>Maximum Members</label>
              <input type="number" placeholder="0" ref={maxGroupSizeRef} />
            </div>
          </FormGroup>
          <span className="search__icon" type="submit" onClick={searchHandler}>
            <i class="ri-search-eye-line"></i>
          </span>
        </Form>
    </Col>
      </div>
  );
};

export default SearchBar;
