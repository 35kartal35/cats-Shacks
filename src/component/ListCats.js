
import React from "react";
import { useDispatch,useSelector } from "react-redux";


const ListCats=()=>{
    
    
    const { catsState, shackState } = useSelector((state) => state);

    console.log(catsState,shackState)
    
    return(
        <div classname="my-5">
             <h1>KEDİLERİN</h1>
        </div>
    )
}

export default ListCats;