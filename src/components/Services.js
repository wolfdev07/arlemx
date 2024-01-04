import ImageOne from "../assets/card-service1-min.jpg"

export function Services() {
    return(
        <div className="container mt-3">
            <div className="card mb-3 w-70">
                <div className="row g-0">
                    <div className="col-4">
                        <img src={ ImageOne } className="img-fluid rounded-start" alt="less"/>
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">Renta Segura</h5>
                            <p className="card-text">Protege tu hogar en alquiler con nuestra cobertura integral.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}