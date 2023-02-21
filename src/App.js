import React, { useEffect } from "react";
import Detail from "./Page/Detail";
import HomePage from "./Page/HomePage";
import AddCats from "./Page/AddCats";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import api from "./api/api"
import urls from "./api/urls"
import ActionTypes from "./redux/Action/ActionTypes";
import Edit from "./Page/Edit";
import ListShacks from "./Page/ListShacks";
import AddShacks from "./Page/AddShaks";

function App() {
  const dispatch = useDispatch();
  const { catsState, shacksState} = useSelector((state) => state);
  
  useEffect(()=>{
    /* fetch cats*/
    dispatch({type: ActionTypes.catsAction.GET_CAT_START});
    api.get(urls.Cats)
    .then((res)=>{
      dispatch({type:ActionTypes.catsAction.GET_CAT_SUCCESS,
      payload: res.data,
      });
    })
    .catch((err)=> {
      dispatch({
        type:ActionTypes.catsAction.GET_CAT_FAİL,
        payload: "Serverda bir hata oluştu",
      });
    });
    /*fetch shacks*/
    dispatch({type:ActionTypes.shacksAction.GET_SHACK_START});
    api.get(urls.Shacks)
    .then((res)=>{
      dispatch({
        type:ActionTypes.shacksAction.GET_SHACK_SUCCESS,
        payload:res.data,
      });
    })
    .catch((err)=>{
      dispatch({
        type:ActionTypes.shacksAction.GET_SHACK_FAİL,
        payload:"Serverda bir hata oluştu"
      });
    });
  }, 
  []);

  if (catsState.success === false || shacksState.success === false)
  return null;
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/cat-detay/:catId" element={<Detail/>}/>
      <Route path="/addcats" element={<AddCats/>}/>
      <Route path="/cat-edit/:catId" element={<Edit/>}/>
      <Route path="/listShacks" element={<ListShacks/>}/>
      <Route path="/addShacks" element={<AddShacks/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
