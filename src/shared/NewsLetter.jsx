import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import maleTraveler from '../assets/images/travel.png'

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col md="6" >
            <div className="newsletter__content">
              <h2>Subscribe & be a member to get useful tricks and tips</h2>
              <div className="newsletter__input">
                <input type="email" placeholder="Enter your email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p >
              "Unlock a world of knowledge and expertise by subscribing today and joining our membership, where you'll gain access to a treasure trove of invaluable tips and tricks to elevate your skills and knowledge!"
              </p>
            </div>
          </Col>
          <Col lg='6'>
            <div className="newsletter__img">
                <img src={maleTraveler} alt=""/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;
