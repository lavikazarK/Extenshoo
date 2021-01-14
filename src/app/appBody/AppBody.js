/*global chrome*/
import React from "react";
import styled from "styled-components";
import UserFeatureCard from "./userFeatureCard/UserFeatureCard";

const AppBodyWrapper = styled.div`
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const AppBody = () => {
  return (
    <AppBodyWrapper>
      <UserFeatureCard />
    </AppBodyWrapper>
  );
};

export default AppBody;
