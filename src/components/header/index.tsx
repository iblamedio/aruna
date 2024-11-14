import './styles.css';
import { FunctionComponent } from "react";
import logo from '../../assets/logo.webp';

export const Header: FunctionComponent = () => {

    return (
        <header className="header-container">

            <div className="header-content">
                <img className="header-logo" src={logo} />

                <div className="header-hamburger">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </div>

        </header>
    )
}