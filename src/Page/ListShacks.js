import React from "react";
import Header from "../component/Header";
import Footer from "../component/footer";
import { useSelector } from "react-redux";


const ListShacks=()=>{
    const {catsState}= useSelector((state)=>state)
    const {shacksState}= useSelector((state)=>state)
    return(
        <div>
            <Header/>
            <div className="container my-5">
            <table className="table">
          <thead className="container my-5">
            <tr>
              <th scope="col">Sıra No</th>
              <th scope="col">Kulübe Adı</th>
              <th scope="col">Kayıtlı Kedi Sayısı</th>
              
            </tr>
          </thead>
          <tbody>
            {shacksState.shacks.length === 0 && (
              <tr>
                <td colSpan={3}>Kayıtlı Minnoş yok</td>
              </tr>
            )}
            {shacksState.shacks.length > 0 && (
              <>
                {shacksState.shacks.map((shack, index) => {
                  const cats = catsState.cats.filter(
                    (item) => item.shackId === shack.id
                  );
                  return (
                    <tr key={shack.id}>
                      <th scope="row">{index + 1}</th>
                      <td >{shack.name}</td>
                      <td >{cats.length}</td>
                      
                    </tr>
                  );
                })}
              </>
            )}
          </tbody>
        </table>
        </div>
            <Footer/>
        </div>
    )
}

export default ListShacks;