import styled from "styled-components";

export const colors = {
  paua: "#f8f9fa",
  cornFlowerBlue: "#284355",
  smokey: "#545769",
  kashmirBlue: "#576A93",
  slateGray: "#757F95",
  rockBlue: "#98A1B8",
  asphalt: "#A4ACC0",
  linkWater: "#BEC4D5",
  solitude: "#DADEE7",
  airGray: "#E1E4EB",
  silver: "#ECEEF3",
  alienGray: "#F5F6F8",
  mist: "#F8F9FA",
  aliceBlue: "#EBF8FF",
  darkPink: "#E94A7F",
  flamingo: "#FF87D0",
  bittersweet: "#F75F5B",
  pamela: "#FF908E",
  casablanca: "#F5B449",
  honey: "#FF9B10",
  jazz: "#B44DFF",
  summerSky: "#268DEC",
  dodgerBlue: "#21A5F6",
  deepSkyBlue: "#1BBEFF",
  eucalyptus: "#2B9854",
  tea: "#43C96D",
  emerald: "#56D27D",
  greenApple: "#00C63F",
  white: "#FFFFFF",
  lightGrey: "#EEE",
  lightBlue: "#beedff"
};

export const backgrounds = {
  generalTransition: "all 0.2s ease",
  backgroundColor: "#f5f6f8",
  secondaryBackgroundColor: "#ffffff",
  errorBackgroundColor: "#ffffff",
  menuBackgroundColor: "#f8f9fa",
  hoverElementBackgroundColor: "rgba(0, 164, 255, 0.09)",
  altHoverElementBackgroundColor: "#a4acc0",
  selectedElementBackgroundColor: "#e5f7ff",
  actionButtonBackground: "#dadee7",
  selectedOptionColor: "#424769",
  hoverOptionColor: "#1b2046",
  activeElementBackgroundColor: "#44bcff",
  overlayColor: "rgba(27, 32, 70, 0.3)",
  loaderBackgroundColor: "#56d27d",
  scrollColor: "#dadee7",
  scrollHoverColor: "#888888"
};

export const borders = {
  borderColor: "#dadee7",
  separatorColor: "#e1e4eb",
  activeElementBorderColor: "#e1e4eb",
  focusedElementBorderColor: "#bec4d5",
  hoverElementBorderColor: "#bec4d5",
  selectedElementBorderColor: "#00a4ff",
  errorBorderColor: "#ff908e",
  disabledButtonBorderColor: "#DADEE7",
  transparentBorderColor: "transparent",
  borderRadius: "5px"
};

export const fonts = {
  fontFamily:
    "Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  alternativeFontSize: "12px",
  titleColor: "#ffffff",
  secondaryTitleColor: "#98a1b8",
  textColor: "#424769",
  secondaryTextColor: "#f5f6f8",
  altTextColor: "#545769",
  placeholderColor: "#a4acc0",
  textareaCounterColor: colors.linkWater,
  textareaPlaceholderColor: colors.linkWater,
  disabledTextColor: "#bec4d5",
  errorTextColor: "#ff4440",
  textFontSize: "14px",
  tagTextColor: "#576a93",
  selectedTextColor: "#000",
  activeColor: "#44bcff",
  mainActiveTextColor: "#0093e5",
  linkColor: "#268dec"
};

const getBorderColor = ({ theme, isValid }) => {
  return isValid ? borders.borderColor : borders.errorBorderColor;
};

const getHoverBorderColor = ({ theme, isValid, disabled }) => {
  if (isValid && !disabled) {
    return borders.hoverElementBorderColor;
  }
};

const getFocusBorderColor = ({ theme, isValid, disabled }) => {
  if (isValid && !disabled) {
    return borders.focusedElementBorderColor;
  }
};

const getBackgroundColor = ({ theme, isValid, disabled }) => {
  if (disabled) {
    return "#F8F9FA";
  }
  if (!isValid) {
    return backgrounds.errorBackgroundColor;
  }
  return backgrounds.secondaryBackgroundColor;
};

const paddingGetter = side => ({ extraPadding }) =>
  extraPadding && extraPadding[side] ? extraPadding[side] : 12;

const StyledInput = styled.input`
  width: 100%;
  border-radius: ${borders.borderRadius};
  background-color: ${getBackgroundColor};
  color: ${({ theme, disabled, withAutoPopulatedValue }) =>
    withAutoPopulatedValue
      ? colors.smokey
      : disabled
      ? fonts.placeholderColor
      : fonts.textColor};
  font-size: ${fonts.textFontSize};
  font-family: ${fonts.fontFamily};
  line-height: 16px;
  border: solid 1px ${getBorderColor};
  padding: 6px ${paddingGetter("rightAdornmentWidth")}px 4px
    ${paddingGetter("leftAdornmentWidth")}px;
  box-sizing: border-box;
  text-align: ${({ isDigital }) => (isDigital ? "right" : "left")};
  outline: none;
  transition: ${backgrounds.generalTransition};
  -moz-appearance: textfield;

  &::placeholder {
    text-overflow: ${({ isDigital }) => (isDigital ? "initial" : "ellipsis")};
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &::placeholder {
    color: ${colors.linkWater};
  }

  &:hover {
    border-color: ${getHoverBorderColor};
    color: ${colors.cornFlowerBlue};
  }

  &:focus {
    border-color: ${getFocusBorderColor};
    background-color: ${backgrounds.secondaryBackgroundColor};
  }
`;

export default StyledInput;
