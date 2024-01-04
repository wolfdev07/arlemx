import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ImageOne from "../assets/card-service1-min.jpg";
import ImageTwo from "../assets/card-service2.jpg"

function ModalLess() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button className='btn btn-sm' variant="primary" onClick={handleShow}>
            Ver mas
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Servicio Legal de Arrendamiento</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={ ImageOne } className='img-thumbnail rounded'/>
                <p>¿Buscas rentar tu propiedad de manera <strong>Segura</strong> y <strong>Confiable</strong>?, nuestros expertos te ayudaran a crear un Contrato de Arrendamiento sólido.
                Si eres <strong>Asesor Inmobiliario Profesional</strong>, nuestros servicios te ayudaran a generar confianza en tus clientes, ya que <strong>garantizarás</strong> la protección del patrimonio de tus clientes.</p>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cerrar
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Contactar
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}


function ModalSell() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button className='btn btn-sm' variant="primary" onClick={handleShow}>
            Ver mas
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Compra-Venta de Inmuebles</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={ ImageTwo } className='img-thumbnail rounded'/>
                <p>Hazlo con asistencia de <strong>profesionales.</strong>
                    <ul>
                        <li>Asesoría Legal Personalizada.</li>
                        <li>Revisión de Documentos e Integración de Expediente.</li>
                        <li>Elaboración de Contrato de Compra-Venta, entre otros.</li>
                        <li>Acompañamiento hasta escrituración ante Notario Publico.</li>
                    </ul>
                </p>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cerrar
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Contactar
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}



export function Services() {
    return(
        <>  
            <h3 className="text-center">Servicios Legales</h3>
            <div className="container mt-3">

                <div className="card mb-3 w-70">
                    <div className="row g-0">
                        <div className="col-4">
                            <img src={ ImageOne } className="img-fluid rounded-start" alt="less"/>
                        </div>
                        <div className="col-8">
                            <div className="card-body">
                                <h6 className="card-title">Arrendamiento Seguro</h6>
                                <p className="card-text">Protege tu hogar en alquiler con nuestra cobertura integral.</p>
                                <ModalLess></ModalLess>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card mb-3 w-70">
                    <div className="row g-0">
                        <div className="col-4">
                            <img src={ ImageTwo } className="img-fluid rounded-start" alt="sell"/>
                        </div>
                        <div className="col-8">
                            <div className="card-body">
                                <h6 className="card-title">Compra-Venta de Inmuebles</h6>
                                <p className="card-text">Deja tu operación en manos expertas.</p>
                                <ModalSell></ModalSell>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card mb-3 w-70">
                    <div className="row g-0">
                        <div className="col-4">
                            <img src={ ImageTwo } className="img-fluid rounded-start" alt="reg"/>
                        </div>
                        <div className="col-8">
                            <div className="card-body">
                                <h6 className="card-title">Regularización de Inmuebles</h6>
                                <p className="card-text">Podemos ayudarte a regularizar cualquier propiedad.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </>
    );
}