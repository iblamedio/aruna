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
                    <div className="menu">
                        <span>Menu</span>
                        <div className="items">
                            <div>Sobre</div>
                            <div>Empreendimentos</div>
                        </div>
                    </div>
                    <div className="socialmedia">
                        <span>Redes Sociais</span>
                        <div className="icons">
                            {Object.entries(icons).map(([key, value]) => {
                                return (
                                    <div className="icon" key={key}>
                                        <img src={value} alt={key} />
                                    </div>
                                )
                            })}
                        </div>
                        <Button/>
                    </div>
                </div>
            </div>
        </div>
    )
}