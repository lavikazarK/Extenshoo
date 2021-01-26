/*global chrome*/
import React, { useState } from "react";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

const RadioCmp = ({
  paramName,
  defaultValue,
  value: currentValue,
  paramNewValues,
  setParamNewValues,
  availableValues
}) => {
  const [value, setValue] = useState(currentValue || defaultValue);
  const availableValuesList = availableValues.split(",");

  const handleChange = e => {
    setValue(e.target.value);
    setParamNewValues([
      ...paramNewValues,
      { name: paramName, value: e.target.value }
    ]); //todo - check duplications
  };

  return (
    <RadioGroup value={value} onChange={handleChange}>
      {availableValuesList.map(value => (
        <FormControlLabel
          value={value}
          control={<Radio color="primary" />}
          label={value}
        />
      ))}
    </RadioGroup>
  );
};

export default RadioCmp;
