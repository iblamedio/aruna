import { FunctionComponent } from "react";
import './styles.css';

import whatsappIcon from '../../assets/whatsapp.svg';

export const Button: FunctionComponent = () => {
    return (
        <a href="http://wa.me/message/YER7IBRUYLFSD1">
            <button className="button">
                <img src={whatsappIcon} />
                ENTRAR EM CONTATO
            </button>
        </a>
    )
}
