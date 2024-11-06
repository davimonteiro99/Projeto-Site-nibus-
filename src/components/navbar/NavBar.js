import React from "react";
import './NavBar.css';
import logos from "../../image/Guanbara.svg"
import Button from "../button/button.jsx";

const NavBar = () => {
    return(
        <div className="Header_div">
            <div className="nav-container">
            <nav className="nav-land">
                <div class="imagem-logo">
                    <img src={logos}/>
                </div>

                <ul class="menu-landing-page">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Destinos</a></li>
                    <li><a href="#">Ofertas</a></li>
                    <li><a href="#">Contatos</a></li>
                </ul>

                <div class="conatiner-buttom-login">
                    <a href="#">Status de Viagem</a>
                    <a href="#">SAC- 0800</a>
                    <Button/>
                </div>
            </nav>
            </div>
        
        </div>
);
};
export default NavBar;