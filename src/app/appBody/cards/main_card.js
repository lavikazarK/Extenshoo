/*global chrome*/
import React from "react";
import IconButtonCmp from "../../../common/components/icon_button/icon_button";
import {
  EmojiFlags,
  Settings,
  Storage,
  Airplay,
  Cast,
  Apps,
  ExitToApp,
  FavoriteBorder,
  SignalCellularAlt
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  root: {
    height: "100%",
    padding: 23,
    width: "90%",
    marginBottom: 20,
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    paddingTop: 40
  }
});

const MainCard = ({ setOpenUFCard, applyDarkMode }) => {
  const classes = useStyles({ applyDarkMode });

  return (
    <Card className={classes.root}>
      <IconButtonCmp
        title={"Config"}
        icon={Settings}
        onClick={() => setOpenUFCard(true)}
      />
      <IconButtonCmp
        title={"Grids"}
        icon={Apps}
        onClick={() => setOpenUFCard(true)}
      />
      <IconButtonCmp
        title={"Globals"}
        icon={Storage}
        onClick={() => setOpenUFCard(true)}
      />
      <IconButtonCmp
        title={"Control panel"}
        icon={Airplay}
        onClick={() => setOpenUFCard(true)}
      />
      <IconButtonCmp
        title={"System processes"}
        icon={Cast}
        onClick={() => setOpenUFCard(true)}
      />
      <IconButtonCmp
        title={"User Features"}
        icon={EmojiFlags}
        onClick={() => setOpenUFCard(true)}
      />
      <IconButtonCmp
        title={"Login as"}
        icon={ExitToApp}
        onClick={() => setOpenUFCard(true)}
      />
      <IconButtonCmp
        title={"Favorites"}
        icon={FavoriteBorder}
        onClick={() => setOpenUFCard(true)}
      />
      <IconButtonCmp
        title={"Signals"}
        icon={SignalCellularAlt}
        onClick={() => setOpenUFCard(true)}
      />
    </Card>
  );
};

export default MainCard;
