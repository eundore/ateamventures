import React from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import DashBoard from "./pages/DashBoard";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <Root>
      <Header />
      <Routes>
        <Route path={"*"} element={<DashBoard />}></Route>
      </Routes>
    </Root>
  );
}

const Root = styled.div`
  position: relative;
  min-width: 1440px;
  min-height: 1050px;

  background: #ffffff;
`;

export default App;
