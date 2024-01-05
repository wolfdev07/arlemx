import { EmailIcon } from "../assets/EmailIcon";
import { PhoneIcon } from "../assets/PhoneIcon";
import { WhatsAppIcon } from "../assets/Whatsapp-icon";


export function ContactUs(params) {
    return (
        <>
            <div className="row">
                <div className="col p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary text-center">
                    <h3>Contáctanos</h3>
                </div>
            </div>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30132.93410910242!2d-99.62336201515805!3d19.255526942284863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd8bae683c2073%3A0x94983f4fa1cfaa56!2zTWV0ZXBlYywgTcOpeC4!5e0!3m2!1ses-419!2smx!4v1704424698070!5m2!1ses-419!2smx" 
                            width="300" 
                            height="150" 
                            style={{ border: 0 }} 
                            allowfullscreen="" 
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>

                <div className="card bg-secondary mt-4">
                    <div className="card-body d-flex justify-content-around">
                        <a href="mailto:arealegalmexico@gmx.com"><EmailIcon></EmailIcon></a>
                        <a href="https://api.whatsapp.com/send?phone=5217294509160&text=Quiero%20contactarlos."><WhatsAppIcon></WhatsAppIcon></a>
                        <a href="tel:729 450 9160"><PhoneIcon></PhoneIcon></a>
                    </div>
                </div>
            </div>
        </>
    );
}