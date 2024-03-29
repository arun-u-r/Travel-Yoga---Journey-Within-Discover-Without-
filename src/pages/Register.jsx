import React,{useContext, useState} from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import{ Link, useNavigate } from 'react-router-dom';
import loginImg from "../assets/images/loginImg.jpg";
import userImg from "../assets/images/userIcon.png";

import { AuthContext } from '../Context/AuthContext';
import { BASE_URL } from '../utils/config';

const Register = () => {

  const [credentials, setCredentials] = useState({
    userName:undefined,
    email:undefined,
    password:undefined,
  });

  const {dispatch} =useContext(AuthContext);
  const navigate=useNavigate();


  const handleChange = e => {
    setCredentials(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async e => {
    e.preventDefault()
    try {
      const res = await fetch(`${BASE_URL}/auth/register`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();

      if(!res.ok) alert(result.message)

      dispatch({type:'REGISTER_SUCCESS'})
      navigate('/login')

    } catch (err) {
      alert(err.message)
    }
  }


  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between ">
              <div className="login__img">
                <img src={loginImg} alt="loginImage" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userImg} alt="userImage" />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Username."
                      required
                      id="username"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Email."
                      required
                      id="email"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password."
                      required
                      id="password"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button className='login_auth__btn' type='submit'>Create account</Button>
                </Form>
                <p>Already have an account ? <Link to='/login' >Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


export default Register