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
    const newParams = paramNewValues.filter(item => item.name !== paramName);
    setParamNewValues([
      ...newParams,
      { name: paramName, value: e.target.value }
    ]);
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
