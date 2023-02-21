import React, { useState } from "react";
import Header from "../component/Header";
import Footer from "../component/footer";
import api from "../api/api";
import urls from "../api/urls";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ActionTypes from "../redux/Action/ActionTypes";


const AddShacks = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { shacksState } = useSelector((state) => state)
    const [form, setForm] = useState({
        id: String(new Date().getTime()),
        name: "",
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        /*validation*/
        if (form.name === "") {
            alert("Kulübe Adı Boş Bırakılamaz...")
            return;
        }


        api.post(urls.Shacks, form)
            .then((res) => {
                dispatch
                ({ type: ActionTypes.shacksAction.ADD_SHACK, payload: form });
                navigate("/")}, 
                window.location.reload())

            .catch((err) => { });
    };
    return (
        <div>
            <Header />
            <div className="container my-5">
                <form onSubmit={handleSubmit}>
                    <div className="container my-5">
                        <label htmlfor="exampleFormControlInput1"
                            className="form-label">
                            Kulube Adı</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Kulübe Adını Giriniz..."
                            value={form.name}
                            onChange={(event) => {
                                setForm({ ...form, name: event.target.value })
                            }}
                        />
                    </div>
                    <div className="d-flex justify-content-center my-5">
                        <button
                            type="submit"
                            className="btn btn-primary w-50">
                            Kaydet
                        </button>
                    </div>
                </form>


            </div>
            <Footer />
        </div>
    )
}

export default AddShacks