/*global chrome*/
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ActionButton from "../../../../common/components/action_button/action_button";

const useStyles = makeStyles(() => ({
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 251,
    marginTop: 35
  }
}));

const Footer = ({ onStartClick, onShowLogsClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.buttons}>
      <ActionButton onClick={onStartClick} buttonName={"Start"} />
      <ActionButton onClick={onShowLogsClick} buttonName={"Show logs"} />
    </div>
  );
};

export default Footer;
