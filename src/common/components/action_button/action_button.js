/*global chrome*/
import React from "react";
import Button from "@material-ui/core/Button";

const ActionButton = ({ buttonName, onClick }) => {
  return (
    <Button
      style={{ backgroundColor: "#7AF0B9" }}
      variant="contained"
      onClick={onClick}
    >
      {buttonName}
    </Button>
  );
};

export default ActionButton;
