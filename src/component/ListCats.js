
import React, { useState, useEffect } from "react";
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
  const {shacksState} = useSelector((state)=>state)
  const [searchCat, setSearchCat] = useState("");
  const [filteredTekir, setFilteredTekir] = useState(catsState.cats)
  useEffect(() => {
    console.log(searchCat)
    const temp = catsState.cats.filter(
      (item) =>
        item.name.toLowerCase().includes(searchCat.toLowerCase()) === true ||
        item.color.toLowerCase().includes(searchCat.toLowerCase()) === true
        );
    setFilteredTekir(temp);
  }, [searchCat]);


  const deletecats = (id) => {
    dispatch({ type: ActionTypes.catsAction.DELETE_CAT_START });
    api.delete(`${urls.Cats}/${id}`)
      .then((res) => {
        dispatch({
          type: ActionTypes.catsAction.DELETE_CAT_SUCCESS,
          payload: id,
        });
      },
        window.location.reload())

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
      <input
          className="form-control w-100"
          type="text"
          placeholder="Aramak istediğiniz kedinin adını yazınız..."
          value={searchCat}
          onChange={(event) => setSearchCat(event.target.value)}

        />
        <tbody>
        
          {filteredTekir.map((cat, index) => {
            const mycats = shacksState.shacks.find(
              (item) => item.id === cat.shackId
            )

            return (
              <div className="header">
                <div className="liste" >
                  <tr key={cat.id}>
                    <th scope="row"><h1>{index + 1}-)</h1></th>                    <td><h1>{cat.name}</h1></td>
                    <td><h2>{cat.age}-</h2></td>
                    <td><h3>({cat.color})-</h3></td>
                    <td><h4>({mycats.name})</h4></td>

                    <td>
                      <Link className="btn btn-primary" to={`/cat-detay/${cat.id}`}>Detay</Link>
                      <button onClick={() => deletecats(cat.id)}
                        className="btn btn-danger">Sil</button>
                      <Link className="btn btn-success" to={`/cat-edit/${cat.id}`}>Düzenle</Link>
                    </td>
                  </tr>
                </div>
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