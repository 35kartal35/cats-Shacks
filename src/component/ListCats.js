
import React from "react";
import { useSelector } from "react-redux";
import "../assets/Listcats.css"
import api from "../api/api"
import urls from "../api/urls"
import { useDispatch } from "react-redux";
import ActionTypes from "../redux/Action/ActionTypes";

const ListCats=()=> {
    
    const dispatch = useDispatch()
    const { catsState } = useSelector((state) => state);
    const {shacksState} = useSelector((state)=> state);
    
    console.log("Shacks", shacksState)
    console.log("cats", catsState)

    const deletecats = (id) =>{
      dispatch({type:ActionTypes.catsAction.DELETE_CAT_START});
      api.delete(`${urls.Cats}/${id}`)
      .then((res)=>{
        dispatch({type:ActionTypes.catsAction.DELETE_CAT_SUCCESS,
          payload:id})
      })
    
      .catch(err=>{
        dispatch({type:ActionTypes.catsAction.DELETE_CAT_FAİL, 
          payload:"Silme İşlemi esnasında bir hata oluştu.",});
      });
    };
    
    return(
        <div classname="my-5">
             <table classname="table">
  <thead>
    <tr>
      <th scope="col">Sıra No</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">color</th>
      <th scope="col">shackId</th>
      <th scope="col">işlemler</th>
    </tr>
  </thead>
  <tbody>
    {catsState.cats.map((cat, index)=>{
      const myShacks= shacksState.shacks.find(
        (item)=>item.id === cat.id
      );
      return(
       
        <tr key={cat.id}>
        <th scope="row">{index+1}</th>
        <td>{cat.name}</td>
        <td>{cat.age}</td>
        <td>{cat.color}</td>
        <td>{myShacks.name}</td>
        <td>
            <button className="btn btn-primary">Detay</button>
            <button onClick= {()=>deletecats(cat.id)} className="btn btn-secondary">Sil</button>
            <button classname="btn btn-danger">Düzenle</button>
            </td>
      </tr>

)
    }
     )}
    
    
  </tbody>
</table>
        </div>
    )
}

export default ListCats;