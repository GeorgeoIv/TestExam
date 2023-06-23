import React from "react";
import { Routes, Route } from "react-router-dom";
//import Navbar from './NavBars/Navbar';
import Sidebar from "./UI/Sidebar";
import Table from "./Pages/Table";

function App() {
  return (
    <>
      <Sidebar />

      <Routes>
        {/* <Route path ='/contries' element={<Table/>}/> */}
        <Route path ='/simpsons' element={<Table/>}/>
      </Routes>
    </>
  );
}

export default App;
