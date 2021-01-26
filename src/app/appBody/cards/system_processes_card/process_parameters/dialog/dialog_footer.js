/*global chrome*/
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ActionButton from "../../../../../../common/components/action_button/action_button";

const useStyles = makeStyles(() => ({
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15
  }
}));

const DialogFooter = ({ onApplyClick, onCancelClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.buttons}>
      <ActionButton onClick={onApplyClick} buttonName={"Apply"} />
      <ActionButton onClick={onCancelClick} buttonName={"Cancel"} />
    </div>
  );
};

export default DialogFooter;
