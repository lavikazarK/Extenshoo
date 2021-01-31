/*global chrome*/
import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    marginTop: 5
  }
}));

const InputCmp = ({
  paramName,
  defaultValue,
  value: currentValue,
  paramNewValues,
  setParamNewValues,
  type
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
    <div className={classes.root}>
      <Typography style={{ paddingBottom: 10 }} variant="subtitle1">
        <b>Type</b>: {type}
      </Typography>
      <Input onChange={handleChange} defaultValue={value} placeholder="Value" />
    </div>
  );
};

export default InputCmp;
