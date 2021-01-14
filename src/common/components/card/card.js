import styled from "styled-components";
import { borders, colors, fonts } from "../input/src/styled_input";

const Card = styled.div`
  border-radius: 7px;
  box-shadow: ${({ withShadow }) => (withShadow ? "0 2px 8px 0" : "0 0 0 0")}
    ${({ theme }) => theme.shadowColor};
  border: solid 1px ${borders.activeElementBorderColor};
  background: ${({ background }) =>
    background !== "GRAY" ? colors.white : colors.alienGray};
`;

Card.defaultProps = {
  withShadow: true,
  background: "GRAY"
};

export const CardHeader = styled.div`
  font-family: ${fonts.fontFamily};
  font-size: 20px;
  color: ${colors.rockBlue};
  display: flex;
  justify-content: space-between;
`;

export default Card;
