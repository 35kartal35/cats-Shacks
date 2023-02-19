import React, {useState} from "react";
import Header from "../component/Header";
import Footer from "../component/footer";
import api from "../api/api";
import urls from "../api/urls";
import { useDispatch,useSelector } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";
import ActionTypes from "../redux/Action/ActionTypes";

const Edit=()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const {catsState}=useSelector((state)=>(state))
    const myCat=catsState.cats.find((item)=>item.id === params.catId)
    const [myEdit,setMyEdit]=useState(myCat)
    const handleSubmit=(event)=>{event.preventDefault();

    api.put(`${urls.Cats}/${params.catId}`,myEdit)
    .then((res)=>{
        dispatch({ type:ActionTypes.catsAction.EDIT_CAT, payload:myEdit});
        navigate("/")
    }
    )
    .catch((err)=>{});

};
    return(
        <div>
            <Header/>
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
                    value={myEdit.name}
                    onChange={(event) => setMyEdit({...myEdit, name: event.target.value})} />
                    <label for="exampleFormControlInput1"
                    className="form-label">
                    Kedimizin Yaşı</label>
                <input 
                    type="number"
                    className="form-control"
                    id="age"
                    placeholder="Yaşı: 3"
                    value={myEdit.age}
                    onChange={(event)=> setMyEdit({...myEdit, age: event.target.value})} />
                    <label for="exampleFormControlInput1"
                    class="form-label">
                    Kedimizin Rengi</label>
                <input 
                    type="text"
                    className="form-control"
                    id="color"
                    placeholder="Rengi: White"
                    value={myEdit.color}
                    onChange={(event)=> setMyEdit({...myEdit, color: event.target.value})} />
                    <label for="exampleFormControlInput1"
                    className="form-label">
                    Kedimizin Kulübesi</label>
                <input 
                    type="number"
                    className="form-control"
                    id="shackId"
                    placeholder="Kulübesi : 2"
                    value={myEdit.shackId}
                    onChange={(event)=> setMyEdit({...myEdit, shackId: event.target.value})} />
            </div>
            <div className="d-flex justify-content-center my-5">
                        <button className="btn btn-primary w-50" type="submit">
                            Kaydet
                        </button>

                    </div>
                    </form>
            <Footer/>
        </div>
        </div>
        
    )
};

export default Edit