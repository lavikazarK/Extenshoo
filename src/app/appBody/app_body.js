/*global chrome*/
import React, { useState } from "react";
import NewUserFeatureCard from "./cards/user_features_card/user_features";
import MainCard from "./cards/main_card";
import { makeStyles } from "@material-ui/core/styles";
import ConfigurationsCard from "./cards/configurations_card/configurations";
import GlobalsCard from "./cards/globals_card/globals";
import LoginCard from "./cards/login_card/login";
import ControlPanelCard from "./cards/control_panel_card/control_panel";

const useStyles = makeStyles(() => ({
  root: {
    height: 420,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
  }
}));

const AppBody = () => {
  const classes = useStyles();
  const [openUFCard, setOpenUFCard] = useState(false);
  const [openConfigCard, setOpenConfigCard] = useState(false);
  const [openGlobalsCard, setOpenGlobalsCard] = useState(false);
  const [openLoginCard, setOpenLoginCard] = useState(false);
  const [openControlPanelCard, setOpenControlPanelCard] = useState(false);

  const allInnerCardsClosed =
    !openUFCard &&
    !openConfigCard &&
    !openGlobalsCard &&
    !openLoginCard &&
    !openControlPanelCard;

  return (
    <div className={classes.root}>
      {allInnerCardsClosed && (
        <MainCard
          setOpenUFCard={setOpenUFCard}
          setOpenConfigCard={setOpenConfigCard}
          setOpenGlobalsCard={setOpenGlobalsCard}
          setOpenLoginCard={setOpenLoginCard}
          setOpenControlPanelCard={setOpenControlPanelCard}
        />
      )}
      {openUFCard && (
        <NewUserFeatureCard onBackClick={() => setOpenUFCard(false)} />
      )}
      {openConfigCard && (
        <ConfigurationsCard onBackClick={() => setOpenConfigCard(false)} />
      )}
      {openGlobalsCard && (
        <GlobalsCard onBackClick={() => setOpenGlobalsCard(false)} />
      )}
      {openLoginCard && (
        <LoginCard onBackClick={() => setOpenLoginCard(false)} />
      )}
      {openControlPanelCard && (
        <ControlPanelCard onBackClick={() => setOpenControlPanelCard(false)} />
      )}
    </div>
  );
};

export default AppBody;
