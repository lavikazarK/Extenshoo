/*global chrome*/
import React, { useState } from "react";
import MaterialCard from "../../../../common/components/card/material_card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AutomationData from "./automation_data";
import Typography from "@material-ui/core/Typography";

const getDate = durationInMinutes => {
  const date = new Date(Date.now());
  return new Date(
    date.setMinutes(date.getMinutes() - durationInMinutes)
  ).toLocaleString();
};

const dummyAutomation = [
  {
    name: "L2 - Chapter 5Chocolate",
    url:
      "redbull09.signalsanalytics.co:18801/app/workshop/view/workbook/0d51d29418504309ab76e399df98a521",
    status: "PENDING",
    start: "2/16/2021, 1:21:07 PM",
    last_update: getDate(2)
  },
  {
    name: "Daily Social Feed - Skin Care",
    url:
      "redbull09.signalsanalytics.co:18801/app/workshop/view/workbook/5226e8bf546c46c5b7a01c1223df7224",
    status: "RUN_RULEBASE-REPROCESSING",
    start: "2/16/2021, 8:10:07 AM",
    last_update: getDate(5)
  }
];

const completedAutomations = [
  {
    name: "Daily Social Feed",
    url:
      "redbull09.signalsanalytics.co:18801/app/workshop/view/workbook/5226e8bf546c46c5b7a01c1223df7224",
    status: "DONE",
    start: "2/16/2021, 11:43:07 AM",
    last_update: "2/16/2021, 12:02:24 PM"
  }
];

const useStyles = makeStyles(() => ({
  root: {
    overflow: "auto",
    marginBottom: 20,
    maxHeight: 240
  },
  label: {
    display: "flex",
    height: 40,
    alignItems: "center",
    color: "blue"
  },
  item: {
    marginTop: 10
  }
}));

const SignalsCard = ({ onBackClick }) => {
  const classes = useStyles();

  const [automations, setAutomation] = useState(dummyAutomation);
  const [doneAutomations, setDoneAutomations] = useState(completedAutomations);

  return (
    <MaterialCard title={"Automations"} onBackClick={onBackClick}>
      <Typography
        style={{ marginTop: 25, color: "dimgray", display: "flex" }}
        variant="h6"
      >
        In Progress
      </Typography>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {automations.map((action, index) => (
          <TreeItem
            className={classes.item}
            nodeId={index}
            label={
              <div className={classes.label}>
                <u>{action.name}</u>
              </div>
            }
            onLabelClick={event => {
              event.preventDefault();
              window.open(action.url);
            }}
          >
            <TreeItem
              nodeId={(index + 500) * 2}
              label={
                <AutomationData title={"Status: "} value={action.status} />
              }
            />
            <TreeItem
              nodeId={(index + 500) * 3}
              label={<AutomationData title={"Start: "} value={action.start} />}
            />
            <TreeItem
              nodeId={(index + 500) * 4}
              label={
                <AutomationData
                  title={"Updated: "}
                  value={action.last_update}
                />
              }
            />
          </TreeItem>
        ))}
      </TreeView>
      <Typography
        style={{ marginTop: 25, color: "dimgray", display: "flex" }}
        variant="h6"
      >
        Completed
      </Typography>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {doneAutomations.map((action, index) => (
          <TreeItem
            className={classes.item}
            nodeId={index}
            label={
              <div className={classes.label}>
                <u>{action.name}</u>
              </div>
            }
            onLabelClick={event => {
              event.preventDefault();
              window.open(action.url);
            }}
          >
            <TreeItem
              nodeId={(index + 500) * 2}
              label={
                <AutomationData title={"Status: "} value={action.status} />
              }
            />
            <TreeItem
              nodeId={(index + 500) * 3}
              label={<AutomationData title={"Start: "} value={action.start} />}
            />
            <TreeItem
              nodeId={(index + 500) * 4}
              label={
                <AutomationData
                  title={"Updated: "}
                  value={action.last_update}
                />
              }
            />
          </TreeItem>
        ))}
      </TreeView>
    </MaterialCard>
  );
};

export default SignalsCard;
