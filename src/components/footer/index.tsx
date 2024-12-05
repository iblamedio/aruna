import { FunctionComponent } from "react";
import './styles.css';

import vicenteLogoWhite from '../../assets/vicente-logo-white.svg';
import instagramLogo from '../../assets/instagram.svg';

import placeholderPhoto from '../../assets/placeholder-photo.png';

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
                </div>
                <div className="commercial">
                    <h4>Time comercial</h4>
                    <div className="members">
                        <div className="member-card">
                            <img src={placeholderPhoto} alt="Liamara" />
                            <span>Liamara</span>
                        </div>
                        <div className="member-card">
                            <img src={placeholderPhoto} alt="André" />
                            <span>André</span>
                        </div>
                        <div className="member-card">
                            <img src={placeholderPhoto} alt="Kurtz" />
                            <span>Kurtz</span>
                        </div>
                    </div>
                </div>
               
            </div>
            </div>
        </section>
    )
}
