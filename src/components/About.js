import React, { Component } from 'react';
import { Grid, Col,Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return(
      <div>
        <Image src='assets/picMe.png' className='header-image' />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            {/* <Image src='assets/eddy.jpg' className='about-profile-pic' rounded /> */}
            <h3 id='h3-text'>About Me</h3>
            <p id='p-text'>While working as a manager at a restaurant chain, I was coding in my free time.</p>
            <p id='p-text'>I got involved too much into it that I decided to enroll in Galvanize's Full Stack Web Developer Immersive.</p>
            <p id='p-text'>During the program I became more familiar with the technology, the pieces got together</p>
            <p id='p-text'>and I built up a better understanding of the lenguages and libraries used to build an app:</p>

          </Col>
        </Grid>
      </div>
    )
  }
}