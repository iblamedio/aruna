import { FunctionComponent } from "react";
import './styles.css';

import whatsappIcon from '../../assets/whatsapp.svg';

export const Button: FunctionComponent = () => {
    return (
        <a href="https://api.whatsapp.com/send?phone=47991284827">
            <button className="button">
                <img src={whatsappIcon} />
                ENTRAR EM CONTATO
            </button>
        </a>
    )
}
