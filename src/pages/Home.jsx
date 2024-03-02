import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../shared/Subtitle.jsx";
import worldSearch from "../assets/images/worldSearch.jpg";
import heroImg from '../assets/images/heroImg.jpg';
import heroImg2 from '../assets/images/heroImg2.jpg';
import heroVideo from '../assets/videos/heroVideo.mp4';
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/featured-tours/FeaturedTourList";
import expImg from '../assets/images/expImg.png'
import MasonryImagesGallery from "../image-gallery/MasonryImagesGallery";
import Testimonials from "../components/testimonial/Testimonials";
import NewsLetter from "../shared/NewsLetter";


const Home = () => {
  return (
    <>
      {/* ########### Hero Section ############## */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <img src={worldSearch} alt="worldImg" />
                  <Subtitle subtitle={"Aloha to all"} />
                </div>
                <h1>
                  In Remembrance. Not all those who wander are lost.
                </h1>
                <p>
                  <strong>
                    "I am not afraid to go where no man has gone before."<br/>
                    Traveling with a detailed plan enhances the journey.
                    Organized itineraries maximize time and minimize unforeseen
                    issues. While spontaneity has its appeal, preparation offers
                    comfort. Scheduled accommodations and attractions ensure
                    smooth transitions between destinations. Ultimately,
                    meticulous planning merges adventure with peace of mind.
                  </strong>
                </p>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__box">
                <img src={heroImg} alt="heroImg"  />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__box mt-4 hero__video-box">
                <video src={heroVideo} alt="heroVideo" autoPlay  loop controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__box heroImg mt-5">
                <img src={heroImg2} alt="heroImg2"  />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ############ About Us Section ############# */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="service__subtitle">What we offers!</h5>
              <h2 className="service__title">"We deliver our finest services."</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
  {/*#################### tour section #################### */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className="mb-5">
              <Subtitle subtitle={'Explore'}/>
              <h2 className="featured_tour_title">Our Fatured Tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ################################## experience Section ###################################*/ }
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experience'} />
                  <h2>Drawing on our wealth of experience<br/> we are here to serve you.</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis,<br/>
                     adipisci praesentium enim quae eius animi explicabo laboriosam?
                     Voluptas animi dolore quisquam cupiditate praesentium aliquid aliquam
                      excepturi nihil sit minus!</p>
                      <div className="counter__wrapper d-flex align-items-center gap-5">
                      <div className="counter__box">
                          <span>12k+</span>
                          <h6>Suceesfull trip</h6>
                        </div>
                        <div className="counter__box">
                          <span>10k+</span>
                          <h6>Regular client</h6>
                        </div>
                        <div className="counter__box">
                          <span>10+</span>
                         <h6>Years experience</h6>
                        </div>
                      </div>
                        
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src={expImg} alt="tourImage" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ################## gallery secton ################## */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'}/>
              <h2 className="gallery__title">visit our tour gallery</h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ############### testimonial section start ######################### */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Support'}/>
              <h2 className="testimonial__title">What people say about Us</h2>
            </Col>
            <Col lg='12'>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* #########################  ######################### */}
      <NewsLetter/>
    </>
  );
};

export default Home;
