import styled from "styled-components";
import buttonStyles, { button } from "./button_styles";
import {
  SHADOW_COLOR,
  SHADOW_SIZE,
  TEXT,
  BACKGROUND,
  BORDER,
  DEFAULT,
  HOVER,
  ACTIVE,
  DISABLED,
  BUTTON_SIZES
} from "./constants";
import { backgrounds, borders, fonts } from "../input/src/styled_input";

const simpleElementSmallMinHeight = "28px";
const simpleElementLargeMinHeight = "38px";
const simpleElementSmallMinWidth = "102px";
const simpleElementLargeMinWidth = "122px";

const getElement = ({ color, state, cssProp, disabled }) => {
  const style = buttonStyles[color];
  return style[disabled ? DISABLED : state][cssProp];
};

const getBoxShadow = state => ({ theme, color, disabled, withShadow }) => {
  if (!withShadow || disabled) {
    return "none";
  }
  return [
    getElement({ color, state, cssProp: SHADOW_SIZE, disabled }),
    getElement({ color, state, cssProp: SHADOW_COLOR, disabled })
  ].join(" ");
};

const StyledButton = styled.button`
  min-height: ${({ size }) =>
    size === BUTTON_SIZES.LARGE
      ? simpleElementLargeMinHeight
      : simpleElementSmallMinHeight};
  min-width: ${({ size }) =>
    size === BUTTON_SIZES.LARGE
      ? simpleElementLargeMinWidth
      : simpleElementSmallMinWidth};
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${borders.borderRadius};
  font-family: ${fonts.fontFamily};
  background-color: ${({ color, disabled }) =>
    getElement({ color, state: DEFAULT, cssProp: BACKGROUND, disabled })};
  border: solid 1px
    ${({ color, disabled }) =>
      getElement({ color, state: DEFAULT, cssProp: BORDER, disabled })};
  font-size: ${({ size }) =>
    size === BUTTON_SIZES.LARGE ? button.fontSize : button.smallFontSize};
  color: ${({ color, disabled }) =>
    getElement({ color, state: DEFAULT, cssProp: TEXT, disabled })};
  box-shadow: ${getBoxShadow(DEFAULT)};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  outline: none;
  transition: ${backgrounds.generalTransition};

  &:hover {
    background-color: ${({ color, disabled }) =>
      getElement({ color, state: HOVER, cssProp: BACKGROUND, disabled })};
    box-shadow: ${getBoxShadow(HOVER)};
    border: solid 1px
      ${({ color, disabled }) =>
        getElement({ color, state: HOVER, cssProp: BORDER, disabled })};
    color: ${({ color, disabled }) =>
      getElement({ color, state: HOVER, cssProp: TEXT, disabled })};
  }

  &:active {
    background-color: ${({ color, disabled }) =>
      getElement({ color, state: ACTIVE, cssProp: BACKGROUND, disabled })};
    box-shadow: ${getBoxShadow(ACTIVE)};
    border: solid 1px
      ${({ color, disabled }) =>
        getElement({ color, state: ACTIVE, cssProp: BORDER, disabled })};
    color: ${({ color, disabled }) =>
      getElement({ color, state: ACTIVE, cssProp: TEXT, disabled })};
  }
`;

export default StyledButton;
