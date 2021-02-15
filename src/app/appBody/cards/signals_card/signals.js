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

const dummyAutomation = [
  {
    name: "API Skin Care",
    url:
      "tst-redbull.signalsanalytics.co:28801/app/workshop/view/workbook/5226e8bf546c46c5b7a01c1223df7224",
    status: "PENDING",
    start: "2021-02-10 12:04:53",
    last_update: "2021-02-10 12:04:53"
  },
  {
    name: "Daily Social Feed - Skin Care",
    url:
      "tst-redbull.signalsanalytics.co:28801/app/workshop/view/workbook/5226e8bf546c46c5b7a01c1223df7224",
    status: "RUN_RULEBASE-REPROCESSING",
    start: "2021-02-10 12:00:00",
    last_update: "2021-02-10 12:04:00"
  },
  {
    name: "Daily Social Feed",
    url:
      "tst-redbull.signalsanalytics.co:28801/app/workshop/view/workbook/5226e8bf546c46c5b7a01c1223df7224",
    status: "FAILED",
    start: "2021-02-10 12:00:00",
    last_update: "2021-02-10 12:04:00"
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

  return (
    <MaterialCard title={"Automations"} onBackClick={onBackClick}>
      <Typography
        style={{ marginTop: 25, color: "dimgray", display: "flex" }}
        variant="h6"
      >
        Reports
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
    </MaterialCard>
  );
};

export default SignalsCard;
