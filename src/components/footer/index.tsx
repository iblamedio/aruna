import { FunctionComponent } from "react";
import './styles.css';
import vicenteLogo from '../../assets/vicente-logo.svg';
import icons from '../../assets/Social Media Icons';
import { Button } from "../button";

export const Footer: FunctionComponent = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="left">
                    <img className="company-logo" src={vicenteLogo} alt="Vicente" />
                </div>

                <div className="right">
                    <div className="socialmedia">
                        <span>Redes Sociais</span>
                        <div className="icons">
                            <div className="icon" onClick={() => window.open("https://www.instagram.com/avicenteempreendimentos/")}>
                                <img src={icons.instagram} alt="instagram"/>
                            </div>
                        </div>
                        <Button/>
                    </div>
                </div>
            </div>
        </div>
    )
}
