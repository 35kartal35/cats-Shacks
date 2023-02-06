import React from "react";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <h1 className="navbar-brand">KEDİLERİN YUVASI</h1>
                    <ul className="navbar-nav">
                            <li className="nav-item">
                                <p className="nav-link active" aria-current="page" href="#">Anasayfa</p>
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