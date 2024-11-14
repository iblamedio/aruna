import { FunctionComponent } from "react";
import './styles.css';

import whatsappIcon from '../../assets/whatsapp.svg';

export const Button: FunctionComponent = () => {
    return (
        <button className="button">
            <img src={whatsappIcon}/>
            ENTRAR EM CONTATO
        </button>
    )
}