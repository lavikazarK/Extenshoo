/*global chrome*/
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  date: {
    width: "100%",
    marginTop: 8
  }
}));

const DateCmp = ({
  paramName,
  defaultValue,
  value: currentValue,
  paramNewValues,
  setParamNewValues
}) => {
  const classes = useStyles();

  const [value, setValue] = useState(currentValue || defaultValue || "");

  const handleChange = e => {
    setValue(e.target.value);
    setParamNewValues([
      ...paramNewValues,
      { name: paramName, value: e.target.value }
    ]); //todo - check duplications
  };

  return (
    <TextField
      label="Date"
      type="date"
      defaultValue={value}
      onChange={handleChange}
      className={classes.date}
      InputLabelProps={{
        shrink: true
      }}
    />
  );
};

export default DateCmp;
