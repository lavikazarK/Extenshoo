/*global chrome*/
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DescriptionItemHeader from "./description_item_header_";
import DescriptionItemValue from "./description_item_value";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline"
  }
}));

const theme = createMuiTheme({
  typography: {
    fontSize: 16
  }
});

const DescriptionItem = ({ header, value }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.item}>
        <DescriptionItemHeader header={header} />
        <DescriptionItemValue value={value} />
      </div>
    </ThemeProvider>
  );
};

export default DescriptionItem;
