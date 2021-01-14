/*global chrome*/
import React, { useState } from "react";
import styled from "styled-components";
import AppBody from "./appBody/AppBody";
import AppHeader from "./appHeader/AppHeader";

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: #f7f7f7;
  width: 330px;
  height: 500px;
`;

const App = () => {
  return (
    <AppWrapper>
      <AppHeader />
      <AppBody />
    </AppWrapper>
  );
};

export default App;
