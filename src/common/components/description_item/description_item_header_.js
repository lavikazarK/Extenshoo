/*global chrome*/
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Stop } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }
}));

const DescriptionItemHeader = ({ header }) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Stop
        style={{
          color: "#7AF0B9",
          transform: "rotate(-45deg)",
          marginRight: 6
        }}
      />
      <Typography style={{ fontWeight: 600 }} variant="subtitle1">
        {header}:
      </Typography>
    </div>
  );
};

export default DescriptionItemHeader;
