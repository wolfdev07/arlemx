import Carousel from 'react-bootstrap/Carousel';
import CoverOne from "../assets/cover1.jpg"
import CoverTwo from "../assets/cover2.jpg"
import CoverThree from "../assets/cover3.jpg"


export function Gallery() {
    return (
        <Carousel>
            <Carousel.Item interval={ 10000 }>
                <img src={ CoverOne } className='d-block w-100' text="First slide" />
                <Carousel.Caption>
                <h3>Sobre Nosotros</h3>
                <p>Tenemos un alto <strong>Compromiso</strong> de <strong>Servir</strong> con <strong>Ética</strong> y <strong>Profesionalismo.</strong></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={ CoverTwo } className='d-block w-100' text="First slide" />
                <Carousel.Caption>
                <h3>Servicios</h3>
                <p>Consulta nuestras <strong>Soluciones</strong> en materia <strong>Inmobiliaria</strong></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={ CoverThree } className='d-block w-100' text="First slide" />
                <Carousel.Caption>
                <h3 className='mb-1'>Aviso de Privacidad</h3>
                <p>Toda tu <strong>información</strong> está <strong>protegida.</strong></p>
                <a className='btn btn-primary'>consultar</a>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}