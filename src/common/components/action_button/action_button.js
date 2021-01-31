/*global chrome*/
import React from "react";
import Button from "@material-ui/core/Button";

const ActionButton = ({ buttonName, onClick, disabled = false }) => {
  return (
    <Button
      style={{ backgroundColor: "#7AF0B9" }}
      variant="contained"
      onClick={onClick}
      disabled={disabled}
    >
      {buttonName}
    </Button>
  );
};

export default ActionButton;
