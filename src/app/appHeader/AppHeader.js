import KenshooLogo from "../../resources/images/KenshooLogo.png";
import React from "react";
import ConfigMenu from "./config_menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: props => (props.applyDarkMode ? "white" : "dimgray"),
    height: 80,
    fontSize: "calc(10px + 2vmin)"
  },
  config: {
    marginLeft: 8,
    height: 36,
    marginTop: 10
  },
  title: {
    display: "flex",
    flexDirection: "row",
    fontSize: 33,
    fontWeight: 400,
    fontFamily: "inherit",
    marginRight: 70,
    alignItems: "baseline"
  },
  image: {
    marginRight: 7
  }
});

const AppHeader = ({ applyDarkMode, setApplyDarkMode }) => {
  const classes = useStyles({ applyDarkMode });
  return (
    <div className={classes.root}>
      <div className={classes.config}>
        <ConfigMenu
          applyDarkMode={applyDarkMode}
          setApplyDarkMode={setApplyDarkMode}
        />
      </div>
      <div className={classes.title}>
        <div className={classes.image}>
          <img
            src={KenshooLogo}
            width={"30px"}
            height={"35px"}
            alt={"KenshooLogo"}
          />
        </div>
        Extenshoo
      </div>
    </div>
  );
};

export default AppHeader;
