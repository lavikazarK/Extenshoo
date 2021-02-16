/*global chrome*/
import React, {useEffect, useState} from "react";
import MaterialCard from "../../../../common/components/card/material_card";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import ActionButton from "../../../../common/components/action_button/action_button";
import ParametersDialog from "./process_parameters/dialog/parameters_dialog";
import ProcessDetails from "./process_details";
import Footer from "./footer";

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

  const [processOptions, setProcessOptions] = useState([]);
  const [process, setProcess] = useState([]);
  const [status, setStatus] = useState("");
  const [lastRun, setLastRun] = useState("");
  const [parameters, setParameters] = useState([]);
  const [openParametersDialog, setOpenParametersDialog] = useState(false);
  const [paramNewValues, setParamNewValues] = useState([]);
  const [host, setHost] = useState("");


  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, {
        type: "SYSTEM_PROCESSES",
        data: {}
      });
    });
  }, []);

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch (message.type) {
      case "GOT_SYSTEM_PROCESSES":
        const systemProcesses = Object.entries(message.systemProcesses).map(
            ([key, value]) => {
              return {
                key,
                instanceId: value.instanceId,
                instanceName: value.instanceName
              };
            }
        );
        setProcessOptions(systemProcesses);
        break;
      case "GOT_SYSTEM_PROCESSES_DTO":
        const systemProcessDto = message.systemProcess;
        setStatus(systemProcessDto.status);
        setParameters(systemProcessDto.params);
        if (systemProcessDto.lastRun > 0) {
          let toLocaleString = new Date(systemProcessDto.lastRun).toLocaleString();
          setLastRun(toLocaleString);
        } else {
          setLastRun("");
        }
        break;
    }
  });

  const onProcessesDropDownChange = (e, { instanceId }) => {
    setProcess(instanceId);
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, {
        type: "SYSTEM_PROCESSES_DTO",
        data: { instanceId: instanceId }
      });
    });

  };

  const onStartProcess = () => {
    if (process) {
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, {
          type: "START_PROCESS",
          data: { instanceId: parseInt(process), params: paramNewValues }
        });
      });
    }
  };

  const onLogClick = () => {
    window.open(host + "/kenshoo_control.jsp?tab=process_log&prof_id=1&processId=" + process, '_blank');
  };


  return (
    <MaterialCard title={"System processes"} onBackClick={onBackClick}>
      <Autocomplete
        style={{ marginTop: 25 }}
        options={processOptions}
        getOptionLabel={option => option.instanceName}
        onChange={onProcessesDropDownChange}
        renderInput={params => (
          <TextField {...params} label="Select process" variant="outlined" />
        )}
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
        paramNewValues={paramNewValues}
        setParamNewValues={setParamNewValues}
      />
      <ProcessDetails lastRun={lastRun} status={status} />
      <Footer onShowLogsClick={onLogClick} onStartClick={onStartProcess} />
    </MaterialCard>
  );
};

export default SystemProcessesCard;
