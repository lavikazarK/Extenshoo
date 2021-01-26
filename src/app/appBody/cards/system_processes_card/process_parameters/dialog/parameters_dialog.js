/*global chrome*/
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import useParameterChange from "./use_parameter_change";
import DialogFooter from "./dialog_footer";
import DialogContent from "@material-ui/core/DialogContent";

const useStyles = makeStyles(() => ({
  body: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "auto"
  },
  params: {
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
    margin: "10px 10px 10px 16px",
    width: 155,
    height: 290,
    overflow: "auto"
  },
  paramsValues: {
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
    margin: "10px 16px 10px 10px",
    width: 155,
    height: 290,
    overflow: "auto"
  },
  paper: {
    minWidth: "310px",
    height: "435px",
    display: "flex",
    justifyContent: "space-between"
  },
  content: {
    padding: 0
  },
  title: {
    padding: 16
  }
}));

const ParametersDialog = ({
  parameters,
  openParametersDialog,
  setOpenParametersDialog
}) => {
  const classes = useStyles();

  const [selectedParam, setSelectedParam] = useState();
  const [paramNewValues, setParamNewValues] = useState([]);

  const ParamValuesCmp = useParameterChange({
    parameters,
    selectedParam,
    paramNewValues,
    setParamNewValues
  });

  const onParamSelect = e => {
    setSelectedParam(e.target.value);
  };

  return (
    <Dialog
      onClose={() => {}}
      open={openParametersDialog}
      classes={{ paper: classes.paper }}
    >
      <div>
        <DialogTitle classes={{ root: classes.title }}>
          Edit parameters
        </DialogTitle>
        <DialogContent dividers classes={{ root: classes.content }}>
          <div className={classes.body}>
            <div className={classes.params}>
              <FormControl component="fieldset">
                <RadioGroup value={selectedParam} onChange={onParamSelect}>
                  {parameters.map(parameter => (
                    <FormControlLabel
                      control={<Radio color="primary" />}
                      label={parameter.prototype.name}
                      value={parameter.prototype.name}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <div className={classes.paramsValues}>
              {ParamValuesCmp && <ParamValuesCmp />}
            </div>
          </div>
        </DialogContent>
      </div>
      <DialogFooter
        onCancelClick={() => {
          setOpenParametersDialog(false);
        }}
        onApplyClick={() => {
          setOpenParametersDialog(false);
        }}
      />
    </Dialog>
  );
};

export default ParametersDialog;
