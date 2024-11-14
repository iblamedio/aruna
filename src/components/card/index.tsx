import { FunctionComponent, ReactNode } from 'react';
import './styles.css';

type Props = {
    cardTitle: string;
    children: ReactNode;
    icon: string;
    id?:string;
}

export const Card: FunctionComponent<Props> = ({ cardTitle, children, icon, id }) => {
    return (
        <div className="card">
            <img id={id} src={icon} alt={cardTitle} className="card-icon"/>
            <div className="card-text">
                <div className="card-title">
                    {cardTitle}
                </div>
                <div className="card-paragraph">
                    {children}
                </div>
            </div>
        </div>
    )
}