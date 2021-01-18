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
  background-color: ${({ applyDarkMode }) =>
    applyDarkMode ? "#19171D" : "#f7f7f7"};
  color: ${({ applyDarkMode }) => !applyDarkMode && "white"};
  width: 330px;
  height: 500px;
`;

const App = () => {
  const [applyDarkMode, setApplyDarkMode] = useState(false);

  return (
    <AppWrapper applyDarkMode={applyDarkMode}>
      <AppHeader
        applyDarkMode={applyDarkMode}
        setApplyDarkMode={setApplyDarkMode}
      />
      <AppBody applyDarkMode={applyDarkMode} />
    </AppWrapper>
  );
};

export default App;
