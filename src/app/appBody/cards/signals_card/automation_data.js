/*global chrome*/
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  item: {
    display: "flex",
    margin: "5px 0"
  },
  title: {
    width: 65,
    display: "flex",
    justifyContent: "start"
  },
  value: {
    position: "initial"
  }
}));

const AutomationData = ({ title = "", value = "" }) => {
  const classes = useStyles();

  return (
    <div className={classes.item}>
      <div className={classes.title}>
        <b>{title}</b>
      </div>
      <div className={classes.value}>{value}</div>
    </div>
  );
};

export default AutomationData;
