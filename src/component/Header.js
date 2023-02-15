import React from "react";
import "../assets/App.css"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <h1 className="navbar-brand">KEDİLERİN YUVASI</h1>
                    <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"/"}>Anasayfa</Link>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link" href="#">Kedi Ekle</p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link" href="#">Detay</p>
                            </li>


                        </ul>
                    </div>
                
            </nav>
        </div>
    )
}

export default Header