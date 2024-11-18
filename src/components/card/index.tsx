import { FunctionComponent, ReactNode } from 'react';
import './styles.css';

type Props = {
    icon: string;
    children: ReactNode
}

export const Card: FunctionComponent<Props> = ({ children, icon }) => {
    return (
        <div className="card">
            <img src={icon} alt="Área de Lazer" className="card-icon"/>
            <div className="card-text">
                <div className="card-title">
                    {children}
                </div>
            </div>
        </div>
    )
}