import Carousel from 'react-bootstrap/Carousel';
import ImageClientOne from "../assets/cliente-1.png"
import ImageClientTwo from "../assets/cliente-2.jpg"
import ImageClientThree from "../assets/cliente-3.jpg"
import PPClientOne from "../assets/pp-client-1.jpg"
import PPClientTwo from "../assets/pp-client-2.jpg"
import PPClientThree from "../assets/pp-client-3.jpg"
import PPClientFour from "../assets/pp-client-4.jpg"
import { StarIcon } from '../assets/star-icon';

function GalleryClients() {
    return (
        <Carousel>
        <Carousel.Item>
            <img src={ ImageClientOne } className='d-block w-100' text="First slide" />

        </Carousel.Item>
        <Carousel.Item>
            <img src={ ImageClientTwo } className='d-block w-100' text="First slide" />

        </Carousel.Item>
        <Carousel.Item>
            <img src={ ImageClientThree } className='d-block w-100' text="First slide" />

        </Carousel.Item>
        </Carousel>
    );
}

function Recommendations(params) {
    return (
        <>
            <div className='card text-center mb-4'>
                <div className='card-body'>
                <img src={ PPClientOne } className='bd-placeholder-img rounded-circle' width='60'/>
                    <div className='card-title'>
                        <h6>Mariana Miranda</h6>
                    </div>
                    <p>¡Increíble experiencia con <strong>Área Legal</strong>! Su asesoría legal fue fundamental para asegurarme de que todo estuviera en orden al comprar mi casa. Profesionalismo y tranquilidad en un solo servicio.</p>
                    <p>
                        <StarIcon></StarIcon> 
                        <StarIcon></StarIcon>
                        <StarIcon></StarIcon>
                        <StarIcon></StarIcon>
                    </p>
                </div>
            </div>

            <div className='card text-center mt-4 mb-4'>
                <div className='card-body'>
                <img src={ PPClientTwo } className='bd-placeholder-img rounded-circle' width='60'/>
                    <div className='card-title'>
                        <h6>Roberto Valencia</h6>
                    </div>
                    <p>Estoy más que satisfecho con la ayuda de <strong>Área Legal México</strong> en la compra de mi nuevo hogar. Su atención a los detalles y claridad en cada paso me dio la confianza necesaria. ¡Altamente recomendado!</p>
                    <p>
                        <StarIcon></StarIcon> 
                        <StarIcon></StarIcon>
                        <StarIcon></StarIcon>
                        <StarIcon></StarIcon>
                        <StarIcon></StarIcon>
                    </p>
                </div>
            </div>

            <div className='card text-center mt-4 mb-4'>
                <div className='card-body'>
                <img src={ PPClientThree } className='bd-placeholder-img rounded-circle' width='60'/>
                    <div className='card-title'>
                        <h6>Carolina Pineda</h6>
                    </div>
                    <p>Estoy impresionada con el equipo de <strong>Área Legal México</strong>. Me ayudaron a resolver un problema de arrendamiento de forma rápida y eficiente. Su conocimiento legal marca la diferencia.</p>
                    <p>
                        <StarIcon></StarIcon> 
                        <StarIcon></StarIcon>
                        <StarIcon></StarIcon>
                        <StarIcon></StarIcon>
                        <StarIcon></StarIcon>
                    </p>
                </div>
            </div>

            <div className='card text-center mt-4 mb-4'>
                <div className='card-body'>
                <img src={ PPClientFour } className='bd-placeholder-img rounded-circle' width='60'/>
                    <div className='card-title'>
                        <h6>Francisco García</h6>
                    </div>
                    <p>Honestamente, no puedo recomendar lo suficiente a <strong>Área Legal México</strong>. Su equipo legal hizo que todo el proceso de Renta de mi propiedad fuera sencillo y sin preocupaciones legales. ¡Un aliado invaluable!</p>
                    <p>
                        <StarIcon></StarIcon> 
                        <StarIcon></StarIcon>
                        <StarIcon></StarIcon>
                        <StarIcon></StarIcon>
                        <StarIcon></StarIcon>
                    </p>
                </div>
            </div>
        </>
    );
}


export function AboutUs() {
    return (
        <>
            <div className="row mb-4">
                <div className="col p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary text-center">
                    <h3>A cerca de Nosotros</h3>
                    <p>Tenemos más de 10 años de experiencia en gestión legal de Bienes Raíces.</p>
                </div>
            </div>

            <section className='container justify-content-center'>
                <div className="col-12">
                    <p className="text-align p-2">
                        Nuestra misión es ayudar a <strong>Proteger tu Patrimonio</strong> a través de <strong>Instrumentos Legales</strong> que pueden prevenir futuros percances, contamos con un equipo de <strong>Profesionales con amplia Experiencia</strong> en <strong>Materia Inmobiliaria</strong>, te invitamos a conocer nuestros servicios.
                        La experiencia y profesionalismo nos respaldan.
                    </p>
                </div>

                <div className='col-12 mb-2 mt-4'>
                    <h5 className='text-center mt-4'>Nuestros Socios</h5>
                    <GalleryClients></GalleryClients>
                </div>

                <div className='col-12 mt-4'>
                    <h5 className='text-center mt-4'>Reseñas de Nuestros Clientes</h5>
                    <Recommendations></Recommendations>
                </div>
                
            </section>
        </>
    );
}