/*global chrome*/
import React from "react";
import Typography from "@material-ui/core/Typography";

const DescriptionItemValue = ({ value }) => {
  return (
    <Typography style={{ marginLeft: 30 }} variant="subtitle1">
      {value}
    </Typography>
  );
};

export default DescriptionItemValue;
