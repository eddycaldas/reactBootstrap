import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
import './Resume.css';

export default class Resume extends Component {
  render() {
    return(
      <div>
        <Image src='assets/resume.pdf' className='main-section'/>
      </div>
    )
  }
}