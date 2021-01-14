import styled from "styled-components";
import {fonts} from "./styled_input";

export const TextAdornment = styled.div`
  font-family: ${fonts.fontFamily};
  font-weight: ${500};
  font-size: 14px;
  line-height: 28px;
  color: ${fonts.secondaryTitleColor};
  padding: 0 12px;
`;

export const LeftAdornmentWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
`;

export const RightAdornmentWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;
