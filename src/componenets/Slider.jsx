import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import img1 from '/src/images/_1.jpg';
import img2 from '/src/images/_2.jpg';
import img3 from '/src/images/_3.jpg';
import '/src/custom_styles/CarouselCustom.css';

function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <Image src={img1} fluid/>
                <Carousel.Caption className="custom-caption">
                    <h3>Now we are in your area!</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={img2} fluid/>
                <Carousel.Caption className="custom-caption">
                    <h3>Enjoy the half price offer now!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={img3} fluid/>
                <Carousel.Caption className="custom-caption">
                    <h3>35% offer on all products!</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider