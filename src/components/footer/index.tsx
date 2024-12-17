import { FunctionComponent } from "react";
import './styles.css';

import vicenteLogoWhite from '../../assets/vicente-logo-white.svg';
import instagramLogo from '../../assets/instagram.svg';
import linkedinLogo from '../../assets/Social Media Icons/linkedin.svg';

import andre from '../../assets/Time Comercial/andre.webp';
import kurt from '../../assets/Time Comercial/kurt.webp';

export const Footer: FunctionComponent = () => {
    return (
        <section className="footer">
            <div className="content">
            <div className="primary-info">
                <div className="logo" onClick={() => window.open('http://avicente.vercel.app')}>
                    <img src={vicenteLogoWhite} alt="A. Vicente" />
                    <div className="logo-text">
                        <span>A. VICENTE</span>
                        <span>EMPREENDIMENTOS</span>
                    </div>
                </div>
                <div className="address">
                <span>Rua 262, 270</span>
                <span>Meia Praia - Itapema - SC</span>
                </div>
                
            </div>

            <div className="secondary-info">
                <div className="social">
                    <h4>Redes Sociais</h4>
                    <div className="instagram">
                        <a href="https://www.instagram.com/avicenteempreendimentos/">
                            <img src={instagramLogo} alt="Instagram"/>
                            <span>@avicenteempreendimentos</span>
                        </a>
                    </div>
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/company/avemp">
                            <img src={linkedinLogo} alt="Instagram"/>
                            <span>AVicente Empreendimentos</span>
                        </a>
                    </div>
                </div>
                <div className="commercial">
                    <h4>Time comercial</h4>
                    <div className="members">
                        <div className="member-card" onClick={() => window.open("https://api.whatsapp.com/send?phone=5547992845867")}>
                            <img src={andre} alt="André" />
                            <span>André ›</span>
                        </div>
                        <div className="member-card" onClick={() => window.open("https://api.whatsapp.com/send?phone=47991346194")}>
                            <img src={kurt} alt="Kurt" />
                            <span>Kurt ›</span>
                        </div>
                    </div>
                </div>
               
            </div>
            </div>
        </section>
    )
}
