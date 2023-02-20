import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import { useParams, Link } from "react-router-dom";
import api from "../api/api";
import urls from "../api/urls";
import icon from "../assets/shack1.png"
import Footer from "../component/footer";
import "../assets/detay.css"

const Detail=()=>{
    const params = useParams();
    const [myCat, setMyCat] = useState(null);
    const [catShack,setCatShack] = useState(null)
    

    
    useEffect(()=>{
        api.get(`${urls.Cats}/${params.catId}`)
        .then((rescat) => {
            console.log(rescat.data);
            setMyCat(rescat.data);
            api.get(`${urls.Shacks}/${rescat.data.shackId}`)
            .then((resShack)=>{
                console.log(resShack.data);
                setCatShack(resShack.data);
            })
             })
             .catch((err)=>{});
    }, []);

    if(myCat === null || catShack === null) return null;
   
    return(
        <div>
            <Header/>
            <div className="detay">
            <h1>KEDİMİN ADI: {myCat.name}</h1>
            <h3>KEDİMİN YAŞI: {myCat.age}</h3>
            <h2>KEDİMİN RENGİ: {myCat.color}</h2>
            <h2>KEDİMİN Kulübesi: {catShack.name}</h2>
            <img src={icon}/>
            <Link to={"/"}>Geri</Link>
            </div>
            <Footer/>

        </div>
    )
}

export default Detail