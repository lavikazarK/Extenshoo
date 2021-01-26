/*global chrome*/
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  items: {
    marginTop: 25,
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline"
  }
}));

const theme = createMuiTheme({
  typography: {
    fontSize: 15
  }
});

const ProcessDetails = ({ status, lastRun }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.items}>
        <Typography style={{ marginTop: 5 }} variant="subtitle1">
          <u>Status</u>: {status}
        </Typography>
        <Typography style={{ marginTop: 5 }} variant="subtitle1">
          <u>Last run</u>: {lastRun}
        </Typography>
      </div>
    </ThemeProvider>
  );
};

export default ProcessDetails;
