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
    const newParams = paramNewValues.filter(item => item.name !== paramName);
    setParamNewValues([
      ...newParams,
      { name: paramName, value: e.target.value }
    ]);
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
