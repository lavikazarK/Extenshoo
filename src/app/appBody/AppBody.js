/*global chrome*/
import React, { useState } from "react";
import styled from "styled-components";
import NewUserFeatureCard from "./cards/userFeatureCard/user_features";
import MainCard from "./cards/main_card";

const AppBodyWrapper = styled.div`
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const AppBody = () => {
  const [openUFCard, setOpenUFCard] = useState(false);

  const allInnerCardsClosed = !openUFCard;

  return (
    <AppBodyWrapper>
      {allInnerCardsClosed && <MainCard setOpenUFCard={setOpenUFCard} />}
      {openUFCard && (
        <NewUserFeatureCard onBackClick={() => setOpenUFCard(false)} />
      )}
    </AppBodyWrapper>
  );
};

export default AppBody;
