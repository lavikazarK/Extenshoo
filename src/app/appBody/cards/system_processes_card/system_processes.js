/*global chrome*/
import React, { useState } from "react";
import MaterialCard from "../../../../common/components/card/material_card";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import ActionButton from "../../../../common/components/action_button/action_button";
import ParametersDialog from "./process_parameters/dialog/parameters_dialog";
import ProcessDetails from "./process_details";
import Footer from "./footer";

const options = [
  "ASAvailabilityProcess",
  "AutoAcceptBPChangesByPortfolio",
  "MemsqlDemoServerProcess",
  "ProductsDataFileProcess"
];

const params = [
  {
    prototype: {
      name: "Boolean",
      type: "Boolean",
      defaultValue: null,
      availableValues: null
    },
    value: "",
    availableValues: null
  },
  {
    prototype: {
      name: "Enum",
      type: "Enum",
      defaultValue: null,
      availableValues: "first,second,third,forth,fifth"
    },
    value: "",
    availableValues: null
  },
  {
    prototype: {
      name: "List",
      type: "List",
      defaultValue: null,
      availableValues:
        "Google,Microsoft,Yahoo,Baidu,Facebook,Linkedin,Social,CityGrid,Criteo"
    },
    value: "",
    availableValues: null
  },
  {
    prototype: {
      name: "String",
      type: "String",
      defaultValue: null,
      availableValues: null
    },
    value: "",
    availableValues: null
  },
  {
    prototype: {
      name: "Int",
      type: "Int",
      defaultValue: null,
      availableValues: null
    },
    value: 4,
    availableValues: null
  },
  {
    prototype: {
      name: "Date",
      type: "Date",
      defaultValue: new Date("2014-08-18T21:11:54"),
      availableValues: null
    },
    value: null,
    availableValues: null
  }
];

const useStyles = makeStyles(() => ({
  button: {
    marginTop: 25
  }
}));

const SystemProcessesCard = ({ onBackClick }) => {
  const classes = useStyles();

  const [process, setProcess] = useState("");
  const [status, setStatus] = useState("");
  const [lastRun, setLastRun] = useState("");
  const [parameters, setParameters] = useState([]);
  const [openParametersDialog, setOpenParametersDialog] = useState(false);

  const dummyOnChange = (e, value) => {
    setProcess(value);
    setStatus("Not Scheduled");
    setLastRun("2020-07-30 03:00:00.0");
    setParameters(params);
  };

  return (
    <MaterialCard title={"System processes"} onBackClick={onBackClick}>
      <Autocomplete
        style={{ marginTop: 25 }}
        options={options}
        onChange={dummyOnChange}
        renderInput={params => (
          <TextField {...params} label="Select process" variant="outlined" />
        )}
        value={process}
      />
      <div className={classes.button}>
        <ActionButton
          onClick={() => setOpenParametersDialog(true)}
          buttonName={"Edit parameters"}
          disabled={process === ""}
        />
      </div>
      <ParametersDialog
        openParametersDialog={openParametersDialog}
        setOpenParametersDialog={setOpenParametersDialog}
        parameters={parameters}
      />
      <ProcessDetails lastRun={lastRun} status={status} />
      <Footer onShowLogsClick={() => {}} onStartClick={() => {}} />
    </MaterialCard>
  );
};

export default SystemProcessesCard;
