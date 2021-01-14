import { borders, colors } from "../input/src/styled_input";

export const button = {
  brandBackgroundColor: colors.dodgerBlue,
  brandHoverBackgroundColor: colors.deepSkyBlue,
  brandActiveBackgroundColor: colors.summerSky,
  brandShadowColor: "rgba(68, 188, 255, 0.5)",
  brandTextColor: colors.white,
  secondaryTextColor: "#ffffff", // should be removed in the future, need for regression

  neutralBackgroundColor: colors.white,
  neutralButtonShadowColor: "rgba(27, 32, 70, 0.06)",
  neutralBorderColor: colors.solitude,
  neutralActiveBorderColor: colors.linkWater,
  neutralTextColor: colors.summerSky,

  ghostBackgroundColor: "rgba(255, 255, 255, 0)",
  ghostSecondaryBackgroundColor: "#e5f7ff",
  ghostActiveBackgroundColor: "rgba(33, 165, 246, 0.2)",
  ghostBorderColor: colors.dodgerBlue,
  ghostDisabledBorderColor: colors.solitude,
  ghostTextColor: colors.summerSky,
  disabledGhostFontColor: colors.linkWater,

  disabledBackgroundColor: colors.silver,
  transparentBackgroundColor: "transparent",
  disabledShadowColor: "transparent",
  defaultShadowSize: "0 4px 7px 0",
  hoverShadowSize: "0 7px 12px 0",
  activeShadowSize: "0 2px 4px 0",
  disabledShadowSize: "0 0 0 0",
  applyButtonHoverBackgroundColor: "#7bec9f",
  smallFontSize: "14px",
  fontSize: "16px",
  textColor: "#00a4ff",
  disabledFontColor: colors.asphalt,

  deleteButtonShadowColor: "rgba(247, 95, 91, 0.3)",
  deleteButtonTextColor: colors.white,
  deleteButtonDisabledTextColor: colors.asphalt,
  deleteButtonNormalBackgroundColor: colors.bittersweet,
  deleteButtonFocusedBackgroundColor: colors.pamela,
  deleteButtonActiveBackgroundColor: "#ff422b",
  deleteButtonDisabledBackgroundColor: colors.silver,
  deleteButtonNormalBorderColor: colors.bittersweet,
  deleteButtonFocusedBorderColor: colors.pamela,
  deleteButtonActiveBorderColor: "#ff422b",
  deleteButtonDisabledBorderColor: colors.solitude,

  activeStateTextColor: "#ffffff",
  activeStateBackgroundColor: "#56D27D",
  activeStateHoverBackgroundColor: "#7bec9f",
  activeStateActiveBackgroundColor: "#2B9854",

  defaultStateTextColor: "#98A1B8",
  defaultStateBackgroundColor: "#ffffff",
  defaultStateBorderColor: "#BEC4D5",
  defaultStateHoverBackgroundColor: "#f8f9fa",
  defaultStateActiveBackgroundColor: "#ECEEF3",

  twoStateDisabledTextColor: "#BEC4D5",
  twoStateDisabledBackgroundColor: "#ECEEF3",
  twoStateDisabledBorderColor: "#DADEE7"
};
const brand = {
  default: {
    shadowColor: button.brandShadowColor,
    shadowSize: button.defaultShadowSize,
    text: button.brandTextColor,
    background: button.brandBackgroundColor,
    border: "transparent"
  },
  hover: {
    shadowColor: button.brandShadowColor,
    shadowSize: button.hoverShadowSize,
    text: button.brandTextColor,
    background: button.brandHoverBackgroundColor,
    border: "transparent"
  },
  active: {
    shadowColor: button.brandShadowColor,
    shadowSize: button.activeShadowSize,
    text: button.brandTextColor,
    background: button.brandActiveBackgroundColor,
    border: "transparent"
  },
  disabled: {
    shadowColor: button.disabledShadowColor,
    shadowSize: button.disabledShadowSize,
    text: button.disabledFontColor,
    background: button.disabledBackgroundColor,
    border: borders.disabledButtonBorderColor
  }
};

export default {
  brand
};
