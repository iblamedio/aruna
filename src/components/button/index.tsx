import { FunctionComponent } from "react";
import './styles.css';

import whatsappIcon from '../../assets/whatsapp.svg';

export const Button: FunctionComponent = () => {
    return (
        <button className="button" onClick={() => window.open("http://wa.me/message/YER7IBRUYLFSD1")}>
            <img src={whatsappIcon} />
            ENTRAR EM CONTATO
        </button>
    )
}
