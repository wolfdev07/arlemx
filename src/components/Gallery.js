import Carousel from 'react-bootstrap/Carousel';
import CoverOne from "../assets/cover1-min.jpg"
import CoverTwo from "../assets/cover2-min.jpg"
import CoverThree from "../assets/cover3-min.jpg"
import { Link as LinkRoute } from 'react-router-dom';


export function Gallery() {
    return (
        <Carousel>
            <Carousel.Item interval={ 10000 }>
                <img src={ CoverOne } className='d-block w-100' text="First slide" />
                <Carousel.Caption>
                <h3>Sobre Nosotros</h3>
                <p>Tenemos un alto <strong>Compromiso</strong> de <strong>Servir</strong> con <strong>Ética</strong> y <strong>Profesionalismo.</strong></p>
                <LinkRoute className='btn btn-primary' to='/about-us'>ver más</LinkRoute>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={ CoverTwo } className='d-block w-100' text="First slide" />
                <Carousel.Caption>
                <h3>Servicios</h3>
                <p>Consulta nuestras <strong>Soluciones</strong> en materia <strong>Inmobiliaria</strong></p>
                <LinkRoute className='btn btn-primary' to='/services'>consultar</LinkRoute>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={ CoverThree } className='d-block w-100' text="First slide" />
                <Carousel.Caption>
                <h3 className='mb-1'>Aviso de Privacidad</h3>
                <p>Toda tu <strong>información</strong> está <strong>protegida.</strong></p>
                <LinkRoute className='btn btn-primary' to='/privacy-notice'>consultar</LinkRoute>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}