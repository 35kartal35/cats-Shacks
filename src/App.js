import React from "react";
import "./assets/App.css"
import HomePage from "./Page/HomePage";

import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
