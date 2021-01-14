import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Container from "./container";
import StyledInput from "./styled_input";
import {
  LeftAdornmentWrapper,
  RightAdornmentWrapper
} from "./adornment_wrapper";
import { nonDigitalOmiter } from "./non_digital_omiter";

class Input extends PureComponent {
  static ADORNMENT_POSITIONS = {
    RIGHT: "right",
    LEFT: "left"
  };

  state = {
    isInputFocused: false,
    leftAdornmentWidth: this.props.defaultInputAdornmentWidth,
    rightAdornmentWidth: this.props.defaultInputAdornmentWidth
  };

  leftAdornmentWrapperRef = React.createRef();
  rightAdornmentWrapperRef = React.createRef();
  inputRef = React.createRef();

  componentDidMount() {
    this.updateInputAdornmentWidth();
    this.setState({ value: this.props.value });
  }

  componentDidUpdate(prevProps) {
    if (this.props.inputAdornment !== prevProps.inputAdornment) {
      this.updateInputAdornmentWidth();
    }
    if (this.props.value !== prevProps.value) {
      this.setState({ value: this.props.value });
    }
  }

  getAdornmentWidth = position =>
    this.props.inputAdornment &&
    this.props.inputAdornment[position] &&
    this[`${position}AdornmentWrapperRef`].current
      ? this[`${position}AdornmentWrapperRef`].current.clientWidth
      : 0;

  updateInputAdornmentWidth = () =>
    this.setState({
      leftAdornmentWidth: this.getAdornmentWidth(
        Input.ADORNMENT_POSITIONS.LEFT
      ),
      rightAdornmentWidth: this.getAdornmentWidth(
        Input.ADORNMENT_POSITIONS.RIGHT
      )
    });

  focusInput = () => {
    this.inputRef && this.inputRef.current.focus();
  };

  onFocus = () => this.setState({ isInputFocused: true }, this.props.onFocus);
  onBlur = () => this.setState({ isInputFocused: false }, this.props.onBlur);
  onChange = event => {
    const newEvent =
      this.props.type !== "number"
        ? event
        : nonDigitalOmiter(event, this.state.value);
    this.props.onChange(newEvent);
    this.setState({
      value:
        this.props.value === undefined
          ? newEvent.target.value
          : this.props.value
    });
  };

  render() {
    const value =
      this.props.value === undefined ? this.state.value : this.props.value;
    return (
      <Container className={this.props.className} width={this.props.width}>
        <StyledInput
          type={this.props.type === "number" ? "text" : this.props.type}
          isDigital={this.props.type === "number"}
          name={this.props.name}
          placeholder={this.props.placeholder}
          disabled={this.props.disabled}
          withAutoPopulatedValue={this.props.withAutoPopulatedValue}
          value={value}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onMouseEnter={this.props.onMouseEnter}
          onMouseLeave={this.props.onMouseLeave}
          pattern={this.props.pattern}
          isValid={this.props.isValid}
          title={this.props.title}
          innerRef={this.inputRef}
          extraPadding={{
            leftAdornmentWidth: this.state.leftAdornmentWidth,
            rightAdornmentWidth: this.state.rightAdornmentWidth
          }}
          autoFocus={this.props.autoFocus}
        />
        {this.props.inputAdornment &&
          this.props.inputAdornment[Input.ADORNMENT_POSITIONS.LEFT] && (
            <LeftAdornmentWrapper innerRef={this.leftAdornmentWrapperRef}>
              {React.cloneElement(
                this.props.inputAdornment[Input.ADORNMENT_POSITIONS.LEFT],
                { isInputFocused: this.state.isInputFocused }
              )}
            </LeftAdornmentWrapper>
          )}
        {this.props.inputAdornment &&
          this.props.inputAdornment[Input.ADORNMENT_POSITIONS.RIGHT] && (
            <RightAdornmentWrapper innerRef={this.rightAdornmentWrapperRef}>
              {React.cloneElement(
                this.props.inputAdornment[Input.ADORNMENT_POSITIONS.RIGHT],
                { isInputFocused: this.state.isInputFocused }
              )}
            </RightAdornmentWrapper>
          )}
      </Container>
    );
  }
}

Input.propTypes = {
  className: PropTypes.string,
  adornmentWrapperClassName: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  disabled: PropTypes.bool,
  withAutoPopulatedValue: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  isValid: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string,
  width: PropTypes.string,
  inputAdornment: PropTypes.shape({
    left: PropTypes.node,
    right: PropTypes.node
  }),
  defaultInputAdornmentWidth: PropTypes.number
};

Input.defaultProps = {
  isValid: true,
  disabled: false,
  type: "text",
  width: "166px",
  defaultInputAdornmentWidth: 24
};

export default Input;
