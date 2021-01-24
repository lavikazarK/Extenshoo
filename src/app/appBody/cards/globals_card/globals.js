/*global chrome*/
import React, { useState } from "react";
import MaterialCard from "../../../../common/components/card/material_card";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import ActionButton from "../../../../common/components/action_button/action_button";

const options = [
  "GRID_APPLICATION_VERSION",
  "SIDE_PANEL_VERSION",
  "REACT_SEARCH_BUILD"
];

const useStyles = makeStyles(() => ({
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 251,
    marginTop: 25
  }
}));

const GlobalsCard = ({ onBackClick }) => {
  const classes = useStyles();

  const [globalName, setGlobalName] = useState("");
  const [globalValue, setGlobalValue] = useState("");
  const [globalDescription, setGlobalDescription] = useState("");

  return (
    <MaterialCard title={"Globals"} onBackClick={onBackClick}>
      <Autocomplete
        style={{ marginTop: 25 }}
        options={options}
        renderInput={params => (
          <TextField {...params} label="Global name" variant="outlined" />
        )}
        onInputChange={(event, value) => setGlobalName(value)}
        inputValue={globalName}
        clearOnBlur={false}
      />
      <TextField
        style={{ marginTop: 25, width: 251 }}
        label="Global value"
        variant="outlined"
        onChange={e => setGlobalValue(e.target.value)}
      />
      <TextField
        style={{ marginTop: 25, width: 251 }}
        label="Description"
        variant="outlined"
        onChange={e => setGlobalDescription(e.target.value)}
      />
      <div className={classes.buttons}>
        <ActionButton onClick={() => {}} buttonName={"Apply"} />
        <ActionButton onClick={() => {}} buttonName={"Delete"} />
      </div>
    </MaterialCard>
  );
};

export default GlobalsCard;
