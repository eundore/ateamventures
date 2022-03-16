import React from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import DashBoard from "./pages/DashBoard";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"*"} element={<DashBoard />}></Route>
      </Routes>
    </>
  );
}

export default App;
