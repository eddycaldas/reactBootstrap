import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText,CardDeck, CardSubtitle, CardBody, Grid, Row, Col, Image } from 'react-bootstrap';
import './Portfolio.css';

export default class Portfolio extends Component {
  render() {
    return(
      <div>
        {/* <Image src='assets/picMe.png' className='header-image' /> */}
        <Grid>
          <h2 id='h2-text'>Portfolio</h2>
          <Row>
            <Col xs={12} sm={8} className='main-section'>
              <p id='p-text'>Technology is fast paced, in this day and age; we must keep up with the ever changing world we have created.
                In order to move forward, we must have secure knowledge. As a programmer, we must be one step ahead of the populations’ needs and interests.
                While creating applications or making them run more efficiently is a personal satisfaction, one that perhaps only a programmer could truly comprehend; 
              I believe that each program is an opportunity to improve our existence and the world around us.</p>
            </Col>

          </Row>
        </Grid>

        <Row className="show-grid">
          <Col className='shadow'xs={6} md={4}>
            <div>
              <a href="#"><Image src='assets/myBusiness.png' className='main-section'/></a>
              <h2 id='project-name'>My Business</h2>
              <p id='project-p'>Responsive Website: it works on desktop browsers and small devices. HTML, CSS.</p>
            </div>
          </Col>
          <Col className='shadow'xs={6} md={4}>
            <div>
              <a href="#"><Image src='assets/presentation.png' className='main-section'/></a>
              <h2 id='project-name'>Capstone Presentation</h2>
              <p id='project-p'>Primos helps you keep your friends and families in one app. React Native, PostgreSQL, knex, Express</p>
            </div>
          </Col>
          <Col className='shadow'xs={6} md={4}>
            <div>
              <a href='#'><Image src='assets/job-react.png' className='main-section'/></a>
                <h2 id='project-name'>Job Search App</h2>
                <p id='project-p'>This app was created for small divice: IOS or android. Expo XDE, React Native, axios, babel, redux</p>
              </div>
            </Col>

          </Row>

          <Row className="show-grid">
            <Col className='shadow'xs={6} md={4}>
              <div>
                <a href="#"><Image src='assets/localhost.png' className='main-section'/></a>
                <h2 id='project-name'>Tripeneer - Localhost</h2>
                <p id='project-p'>This group app allows you to create an account and save your info. CRUD, JavaScript, Express, Knex.</p>
              </div>
            </Col>
            <Col className='shadow'xs={6} md={4}>
              <div>
                <a href="#"><Image src='assets/muvieCrud.png' className='main-section'/></a>
                <h2 id='project-name'>Movie Rating</h2>
                <p id='project-p'>This CRUD app was created with HTML, CSS, JavaScript, AJAX. Backend: knex and postgreSQL

                </p>
              </div>
            </Col>
            <Col className='shadow'xs={6} md={4}>
              <div>
                <a href='#'><Image src='assets/react.png' className='main-section'/></a>
              <h2 id='project-name'>Eat with React</h2>
              <p id='project-p'>App created with react, no style only funtionality. Also, usage of LocalStorage and lifecycle.</p>
            </div>
          </Col>

        </Row>
        
      </div>
    )
  }
}