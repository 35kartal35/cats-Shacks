import React, { useState } from "react";

import Header from "../component/Header";
import Footer from "../component/footer";
import api from "../api/api";
import urls from "../api/urls";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ActionTypes from "../redux/Action/ActionTypes";

const AddCats = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [myNewCat, setMyNewCat] = useState({
        id: String(new Date().getTime()),
        name:"",
        age:"",
        color:"",
        shackId:""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(myNewCat);
        /*validation*/
        if (myNewCat.name === "" || myNewCat.age === "" || myNewCat.color === "" || myNewCat.shackId === "") {
            alert("Kedinin adı, rengi, yaşı, kulübesi bos bırakılamaz");
            return;
        }

        /*request*/

        api.post(urls.Cats, myNewCat)
        .then((res)=>{
            dispatch({
                type: ActionTypes.catsAction.ADD_CAT,
                payload: myNewCat,
            });
            navigate("/")
        })
        .catch((err)=>{});
    };

    return (
        <div>
            <Header />
        <div className="container my-5">
            
            <form onSubmit={handleSubmit}>
            
            <div className="mb-3">
                <label for="exampleFormControlInput1"
                    class="form-label">
                    Kedimizin Adı</label>
                <input 
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="ismi:Tekir"
                    value={myNewCat.name}
                    onChange={(event) => setMyNewCat({...myNewCat, name: event.target.value})} />
                    <label for="exampleFormControlInput1"
                    className="form-label">
                    Kedimizin Yaşı</label>
                <input 
                    type="number"
                    className="form-control"
                    id="age"
                    placeholder="Yaşı: 3"
                    value={myNewCat.age}
                    onChange={(event)=> setMyNewCat({...myNewCat, age: event.target.value})} />
                    <label for="exampleFormControlInput1"
                    class="form-label">
                    Kedimizin Rengi</label>
                <input 
                    type="text"
                    className="form-control"
                    id="color"
                    placeholder="Rengi: White"
                    value={myNewCat.color}
                    onChange={(event)=> setMyNewCat({...myNewCat, color: event.target.value})} />
                    <label for="exampleFormControlInput1"
                    className="form-label">
                    Kedimizin Kulübesi</label>
                <input 
                    type="number"
                    className="form-control"
                    id="shackId"
                    placeholder="Kulübesi : 2"
                    value={myNewCat.shackId}
                    onChange={(event)=> setMyNewCat({...myNewCat, shackId: event.target.value})} />
            </div>
            <div className="d-flex justify-content-center my-5">
                        <button className="btn btn-primary w-50" type="submit">
                            Kaydet
                        </button>

                    </div>
            <Footer />
            </form>
        </div>
        </div>
    )
}

export default AddCats;