import React from "react";
import "../assets/App.css"
import { Link } from "react-router-dom";
import AddCats from "../Page/AddCats";

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
                                <Link to={"/addcats"}>Kedi Ekle</Link>
                            </li>
                            


                        </ul>
                    </div>
                
            </nav>
        </div>
    )
}

export default Header