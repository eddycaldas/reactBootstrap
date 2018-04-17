import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';


export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2 className='home-text'>Hi, I'm a Full Stack Web Developer.</h2>
          <h2 className='home-text'>I live in Denver, Colorado.</h2>
          <p id='home-p'>"Following my dreams took me all the way here, where I can be myself and create something better while moving forward"</p>
          <p id='home-p'>"Any sufficiently advanced technology is equivalent to magic."-Arthur C. Clarke(Author)</p>
        </Jumbotron>
        {/* <Row className='show-grid text-center'>
          <Col xs={12} sm={4} className='person-wrapper'>
            <Image src='assets/eddy.jpg' circle className='profile-pic' />
            <h3>Eddy</h3>
            <p>kanf a adfjbv mhb jb skbrk ashjb shb jsh fajs vass khs asr bsirgbsrba opb</p>
          </Col>
          <Col xs={12} sm={4} className='person-wrapper'>
            <Image src='assets/eddy.jpg' circle className='profile-pic' />
            <h3>Eddy</h3>
            <p>kanf a adfjbv mhb jb skbrk ashjb shb jsh fajs vass khs asr bsirgbsrba opb</p>
          </Col>
          <Col xs={12} sm={4} className='person-wrapper'>
            <Image src='assets/eddy.jpg' circle className='profile-pic' />
            <h3>Eddy</h3>
            <p>kanf a adfjbv mhb jb skbrk ashjb shb jsh fajs vass khs asr bsirgbsrba opb</p>
          </Col>
          </Row>
        */}
      </Grid>
    );
  }
}

