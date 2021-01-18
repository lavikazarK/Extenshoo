import KenshooLogo from "../../resources/images/KenshooLogo.png";
import React from "react";
import styled from "styled-components";
import ConfigMenu from "./config_menu";

const AppWrapperHeader = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: ${({ applyDarkMode }) => (applyDarkMode ? "white" : "dimgray")};
`;

const ConfigIconWrapper = styled.div`
  margin-left: 8px;
  height: 36px;
  margin-top: 10px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 33px;
  font-weight: 400;
  font-family: inherit;
  margin-right: 70px;
  align-items: baseline;
`;

const ImgWrapper = styled.div`
  margin-right: 7px;
`;

const AppHeader = ({ applyDarkMode, setApplyDarkMode }) => {
  return (
    <AppWrapperHeader applyDarkMode={applyDarkMode}>
      <ConfigIconWrapper>
        <ConfigMenu
          applyDarkMode={applyDarkMode}
          setApplyDarkMode={setApplyDarkMode}
        />
      </ConfigIconWrapper>
      <TitleWrapper>
        <ImgWrapper>
          <img
            src={KenshooLogo}
            width={"30px"}
            height={"35px"}
            alt={"KenshooLogo"}
          />
        </ImgWrapper>
        Extenshoo
      </TitleWrapper>
    </AppWrapperHeader>
  );
};

export default AppHeader;
