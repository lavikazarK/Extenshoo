import React from "react";
import PropTypes from "prop-types";
import StyledButton from "./styled_button";
import { BUTTON_COLORS, BUTTON_SIZES } from "./constants";

const Button = ({ children, ...restProps }) => (
  <StyledButton {...restProps}>{children}</StyledButton>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(BUTTON_COLORS)),
  size: PropTypes.string,
  withShadow: PropTypes.bool,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  color: BUTTON_COLORS.BRAND,
  size: BUTTON_SIZES.LARGE,
  withShadow: true,
  disabled: false
};

export default Button;
