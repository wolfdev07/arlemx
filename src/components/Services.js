import ImageOne from "../assets/card-service1-min.jpg";
import ImageTwo from "../assets/card-service2.jpg"

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
                                <p className="card-text">Comprar un bien inmueble es un gran paso, deja tu operación en manos expertas.</p>
                                
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
                                <p className="card-text"></p>
                                
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </>
    );
}