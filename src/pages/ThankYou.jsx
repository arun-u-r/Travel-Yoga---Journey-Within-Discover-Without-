import React from 'react';
import '../styles/thank-you.css';
import {Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return <section>
    <Container>
      <Row>
        <Col lg='12' className='pt-3 text-center'>
          <div className="thank__you">
          <span>
          <i class="ri-checkbox-line"></i>
          </span>
          <h1 className='mb-3 fw-semibold'>Thank You</h1>
          <h3 className="mb-4">Your Tour is booked.</h3>
          <Button className='back__to_home w-25 fw-semibold'>
            <Link to='/home'>Back To Home</Link>
          </Button>
          </div>
         
        </Col>
      </Row>
    </Container>
  </section>
}

export default ThankYou