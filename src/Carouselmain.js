import React from 'react';
import {Carousel} from 'react-bootstrap';
import './Carouselmain.css'
import FirstImage from './Assets/pizzacaro.jpg';
import SecondImage from './Assets/restocaro.jpg';
import ThirdImage from './Assets/eatcaro.jpg';


const Carouselmain = () => {
    return(
        <Carousel slide={false} fade={false}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={FirstImage}
                alt="First slide"
                />
                <Carousel.Caption>
                <h2>Feel The Real Taste</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={SecondImage}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h2>Feel The Real Taste</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ThirdImage}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h2>Feel The Real Taste</h2>
                </Carousel.Caption>
            </Carousel.Item>
    </Carousel>
    );
}

export default Carouselmain;