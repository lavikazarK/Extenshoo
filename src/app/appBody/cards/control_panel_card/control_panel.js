/*global chrome*/
import React, {useEffect, useState} from "react";
import MaterialCard from "../../../../common/components/card/material_card";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import { OpenInNew } from "@material-ui/icons";
import ActionButton from "../../../../common/components/action_button/action_button";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 255,
    marginTop: 10,
    marginLeft: 5,
    alignItems: "center"
  },
  refresh: {
    marginTop: 40
  }
}));

const theme = createMuiTheme({
  typography: {
    fontSize: 13
  }
});

const ControlPanelCard = ({ onBackClick }) => {
  const classes = useStyles();

  const [logLevelDebugChecked, setLogLevelDebugChecked] = useState(false);
  const [schedulerChecked, setSchedulerChecked] = useState(false);
  const [reloadOptions, setReloadOptions] = useState([]);
  const [selectedOption, setSelectedReloadOption] = useState("");
  const [url, setUrl] = useState("");

  const onLogLevelDebugChange = event => {
    setLogLevelDebugChecked(event.target.checked);
  };

  const onSchedulerChange = event => {
    setSchedulerChecked(event.target.checked);
  };

   const onControlPanelDropDownChange = (e, { value }) => {
       setSelectedReloadOption(value.option);
   };

  const onRefresh = () => {
       chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
           chrome.tabs.sendMessage(tabs[0].id, {
               type: "REFRESH_CONTROL_PANEL",
               data: {
                   selectedOption,
                   schedulerChecked,
                   logLevelDebugChecked,
                   tabId: tabs[0].id
               }
           });
       });
  };

    const onClickKenshooLogs= () => {
        window.open(url.split('/')[0]+'.'+url.split('/')[1]+'/global_log_viewer.jsp');
    };

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      switch (message.type) {
          case "GOT_CONTROL_PANEL_OPTIONS":
              const options = Object.entries(message.options).map(
                  ([key, value]) => {
                      return {
                          key,
                          value: value.option,
                          text: value.option
                        };
                    }
                );
                setReloadOptions(options);
                break;
          case "GOT_URL":
              const url = Object.entries(message.url);
              setUrl(url);
              break;
        }
        console.log(message);
    });

  useEffect(() => {
     chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
         chrome.tabs.sendMessage(tabs[0].id, {
             type: "GET_CONTROL_PANEL_OPTIONS",
             data: {}
          });
      });
     chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
         chrome.tabs.sendMessage(tabs[0].id, {
             type: "GET_URL",
             data: {}
         });
     });
  }, []);




  return (
    <MaterialCard title={"Control panel"} onBackClick={onBackClick}>
      <Autocomplete
        style={{ marginTop: 20, marginBottom: 20 }}
        options={reloadOptions}
        onChange={onControlPanelDropDownChange}
        renderInput={params => (
          <TextField {...params} label="Cache management" variant="outlined" />
        )}
      />
      <ThemeProvider theme={theme}>
        <div className={classes.item}>
          <Typography variant="h6">Log Level debug</Typography>
          <Switch
            checked={logLevelDebugChecked}
            onChange={onLogLevelDebugChange}
            color="primary"
          />
        </div>
        <div className={classes.item}>
          <Typography variant="h6">Scheduler</Typography>
          <Switch
            checked={schedulerChecked}
            onChange={onSchedulerChange}
            color="primary"
          />
        </div>
        <div className={classes.item}>
          <Typography variant="h6">Kenshoo logs</Typography>
          <Button
              onClick={onClickKenshooLogs}
            style={{
              backgroundColor: "#7AF0B9",
              maxWidth: "40px",
              maxHeight: "30px",
              minWidth: "30px",
              minHeight: "30px",
              alignItems: "center",
              paddingLeft: 18,
              marginRight: 8
            }}
            size={"small"}
            variant="contained"
            startIcon={<OpenInNew />}
          />
        </div>
      </ThemeProvider>
      <div className={classes.refresh}>
        <ActionButton onClick={onRefresh} buttonName={"Refresh"} />
      </div>
    </MaterialCard>
  );
};

export default ControlPanelCard;
