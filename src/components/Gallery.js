import Carousel from 'react-bootstrap/Carousel';
import CoverOne from "../assets/cover1.jpeg"
import CoverTwo from "../assets/cover2.png"
import CoverThree from "../assets/cover3.jpg"


export function Gallery() {
    return (
        <Carousel>
            <Carousel.Item interval={ 2000 }>
                <img src={ CoverThree } className='d-block w-100' text="First slide" />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={ CoverTwo } className='d-block w-100' text="First slide" />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={ CoverOne } className='d-block w-100' text="First slide" />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}