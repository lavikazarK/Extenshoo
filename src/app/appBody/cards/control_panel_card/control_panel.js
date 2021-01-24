/*global chrome*/
import React, { useState } from "react";
import MaterialCard from "../../../../common/components/card/material_card";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import { OpenInNew } from "@material-ui/icons";
import ActionButton from "../../../../common/components/action_button/action_button";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from "@material-ui/styles";

const options = [
  "Agencies",
  "Profiles",
  "Reloadable globals",
  "User settings cache"
];

const useStyles = makeStyles(() => ({
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 255,
    marginTop: 10,
    marginLeft: 5,
    alignItems: "center"
  },
  refresh: {
    marginTop: 40
  }
}));

const theme = createMuiTheme({
  typography: {
    fontSize: 13
  }
});

const ControlPanelCard = ({ onBackClick }) => {
  const classes = useStyles();

  const [logLevelDebugChecked, setLogLevelDebugChecked] = useState(false);
  const [schedulerChecked, setSchedulerChecked] = useState(false);

  const onLogLevelDebugChange = event => {
    setLogLevelDebugChecked(event.target.checked);
  };

  const onSchedulerChange = event => {
    setSchedulerChecked(event.target.checked);
  };

  return (
    <MaterialCard title={"Control panel"} onBackClick={onBackClick}>
      <Autocomplete
        style={{ marginTop: 20, marginBottom: 20 }}
        options={options}
        onChange={() => {}}
        renderInput={params => (
          <TextField {...params} label="Cache management" variant="outlined" />
        )}
      />
      <ThemeProvider theme={theme}>
        <div className={classes.item}>
          <Typography variant="h6">Log Level debug</Typography>
          <Switch
            checked={logLevelDebugChecked}
            onChange={onLogLevelDebugChange}
            color="primary"
          />
        </div>
        <div className={classes.item}>
          <Typography variant="h6">Scheduler</Typography>
          <Switch
            checked={schedulerChecked}
            onChange={onSchedulerChange}
            color="primary"
          />
        </div>
        <div className={classes.item}>
          <Typography variant="h6">Kenshoo logs</Typography>
          <Button
            style={{
              backgroundColor: "#7AF0B9",
              maxWidth: "40px",
              maxHeight: "30px",
              minWidth: "30px",
              minHeight: "30px",
              alignItems: "center",
              paddingLeft: 18,
              marginRight: 8
            }}
            size={"small"}
            variant="contained"
            startIcon={<OpenInNew />}
          />
        </div>
      </ThemeProvider>
      <div className={classes.refresh}>
        <ActionButton onClick={() => {}} buttonName={"Refresh"} />
      </div>
    </MaterialCard>
  );
};

export default ControlPanelCard;
