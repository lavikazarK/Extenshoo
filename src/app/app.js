/*global chrome*/
import React, { useMemo, useState } from "react";
import AppBody from "./appBody/app_body";
import AppHeader from "./app_header/app_header";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    backgroundColor: props => (props.applyDarkMode ? "#27242C" : "#f7f7f7"),
    color: props => !props.applyDarkMode && "white",
    width: 330,
    height: 500
  }
});

const App = () => {
  const [applyDarkMode, setApplyDarkMode] = useState(false);
  const classes = useStyles({ applyDarkMode });

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: applyDarkMode ? "dark" : "light"
        }
      }),
    [applyDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppHeader
          applyDarkMode={applyDarkMode}
          setApplyDarkMode={setApplyDarkMode}
        />
        <AppBody />
      </div>
    </ThemeProvider>
  );
};

export default App;
