import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/travelYogaLogo.png";
import { FaRegCopyright } from "react-icons/fa";

const quick_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick_links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {
  const year = new Date().toDateString();
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col md="3">
              <div className="logo">
                <img src={Logo} alt="TravelYoga" className="footer__img" />
                <p>
                  <div>
                    <p>
                      TravelYoga Front-end design developed by
                      <span style={{ fontWeight: "bold", color: "blue" }}>
                        <Link className="text-decoration-none" to="/about"> Arun U R</Link>
                      </span>
                    </p>
                  </div>
                  .
                </p>
                <div className="footer__social_link d-flex align-items-center gap-4 py-3">
                  <span>
                    <Link to="https://www.youtube.com/channel/UCjdFK8VH3WZKsx2jO9lXkNQ">
                      <i class="ri-youtube-fill"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="https://www.instagram.com/_u.__.r_/">
                      <i class="ri-instagram-fill"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="https://github.com/arun-u-r">
                      <i class="ri-github-fill"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="https://twitter.com/ArunUR214441">
                      <i class="ri-twitter-x-fill"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="https://www.facebook.com/arunurz">
                      <i class="ri-facebook-circle-fill"></i>
                    </Link>
                  </span>
                </div>
              </div>
            </Col>
            <Col lg="3">
              <h5 className="footer__link_title">Discover</h5>
              <ListGroup className="footer__quick_link">
                {quick_links.map((item, index) => (
                  <ListGroupItem className="ps-0 border-0" key={index}>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col lg="3">
              <h5 className="footer__link_title">Quick Links</h5>
              <ListGroup className="footer__quick_link">
                {quick_links2.map((item, index) => (
                  <ListGroupItem className="ps-0 border-0" key={index}>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col lg="3">
              <h5 className="footer__link_title">Contact Us</h5>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 align-items-center gap-2">
                    <span>
                      <i class="ri-map-pin-fill"></i>
                    </span>
                    
                  </h6>
                  <p className="mb-0">Calicut, Kerala, India</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 align-items-center gap-2">
                    <span>
                      <i class="ri-mail-fill"></i>
                    </span>
                    
                  </h6>
                  <p className="mb-0">arununithroth@gmail.com</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 align-items-center gap-2">
                    <span>
                      <i class="ri-phone-fill"></i>
                    </span>
                    
                  </h6>
                  <p className="mb-0">+919048135079</p>
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col lg="12" className="text-center ">
              <p className="footer__bottom">
                  {year} <FaRegCopyright className="text-dark " /> travelYoga by arun.U.R. All rights
                reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
