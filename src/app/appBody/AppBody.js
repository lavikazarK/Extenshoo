/*global chrome*/
import React, { useState } from "react";
import NewUserFeatureCard from "./cards/userFeatureCard/user_features";
import MainCard from "./cards/main_card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    height: 420,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
  }
}));

const AppBody = ({ applyDarkMode }) => {
  const classes = useStyles();
  const [openUFCard, setOpenUFCard] = useState(false);

  const allInnerCardsClosed = !openUFCard;

  return (
    <div className={classes.root}>
      {allInnerCardsClosed && (
        <MainCard setOpenUFCard={setOpenUFCard} applyDarkMode={applyDarkMode} />
      )}
      {openUFCard && (
        <NewUserFeatureCard
          onBackClick={() => setOpenUFCard(false)}
          applyDarkMode={applyDarkMode}
        />
      )}
    </div>
  );
};

export default AppBody;
