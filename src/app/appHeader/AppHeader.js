import kSearch from "../../resources/images/kSearch.png";
import React from "react";
import styled from "styled-components";

const AppWrapperHeader = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  margin-bottom: 20px;
`;

const AppHeader = () => {
  return (
    <AppWrapperHeader>
      <img src={kSearch} width={"150px"} height={"50px"} alt={"KSearch"} />
    </AppWrapperHeader>
  );
};

export default AppHeader;
