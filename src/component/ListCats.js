
import React from "react";
import { useSelector } from "react-redux";
import "../assets/Listcats.css";
import api from "../api/api"
import urls from "../api/urls"
import { useDispatch } from "react-redux";
import ActionTypes from "../redux/Action/ActionTypes";

import { Link } from "react-router-dom";


const ListCats = () => {

  const dispatch = useDispatch()
  const { catsState } = useSelector((state) => state);
  
  
  
  const deletecats = (id) => {
    dispatch({ type: ActionTypes.catsAction.DELETE_CAT_START });
    api.delete(`${urls.Cats}/${id}`)
      .then((res) => {
        dispatch({
          type: ActionTypes.catsAction.DELETE_CAT_SUCCESS,
          payload: id,
        });
      })

      .catch(err => {
        dispatch({
          type: ActionTypes.catsAction.DELETE_CAT_FAİL,
          payload: "Silme İşlemi esnasında bir hata oluştu.",
        });
      });
  };

  return (
    <div classname="container my-5">
      <table classname="liste">
        
        <tbody>
          {catsState.cats.map((cat, index) => {
            
            return (
              <div className="liste" >
                <tr key={cat.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{cat.name}</td>
                  <td>{cat.age}</td>
                  <td>{cat.color}</td>
                  
                  <td>
                    <Link to={`/cat-detay/${cat.id}`}>Detay</Link>
                    <button onClick={() =>    deletecats(cat.id)} 
                    className="btn btn-secondary">Sil</button>
                    <button classname="btn btn-success">Düzenle</button>
                  </td>
                </tr>
              </div>

            )
          }
          )}


        </tbody>
      </table>
      
     
    </div>
  )
}

export default ListCats;