import React from 'react';
import { Carousel } from 'react-bootstrap';
import petroomImage from '../../images/petroom.jpg';
import petroomImage2 from '../../images/whole-room-into-a-dog-nook.jpeg';

const HomeCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-75"
        src={petroomImage}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Image 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={petroomImage2}
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Image 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default HomeCarousel;
