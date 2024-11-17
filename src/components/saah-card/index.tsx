import { FunctionComponent, ReactNode } from "react";
import './styles.css';

type Props = {
    width: number,
    children: ReactNode,
    icon: string
}

export const SaahCard: FunctionComponent<Props> = ({ width, children, icon }) => {
    return (
        <div className="saah-card" style={{ width: `${width}px` }}>
            <img src={icon} alt="Card Icon" />
            <div>{children}</div>
        </div>
    )
}