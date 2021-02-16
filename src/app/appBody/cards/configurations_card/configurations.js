/*global chrome*/
import React, {useEffect, useState} from "react";
import MaterialCard from "../../../../common/components/card/material_card";
import { makeStyles } from "@material-ui/core/styles";
import DescriptionItem from "../../../../common/components/description_item/description_item";

const useStyles = makeStyles(() => ({
  item: {
    marginTop: 25
  }
}));

const ConfigurationsCard = ({ onBackClick }) => {
  const classes = useStyles();

  const [host, setHost] = useState("");
  const [build, setBuild] = useState("");

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      switch (message.type) {
          case "GOT_HOST":
              setHost(message.host);
              break;
          case "GOT_BUILD_NUMBER":
              setBuild(message.build);
              break;
      }
      console.log(message);
  });


  useEffect(() => {
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
          chrome.tabs.sendMessage(tabs[0].id, {
              type: "GET_HOST",
              data: {}
          });
      });
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
          chrome.tabs.sendMessage(tabs[0].id, {
              type: "GET_BUILD_NUMBER",
              data: {}
          });
      });
  }, []);

  return (
    <MaterialCard title={"Configurations"} onBackClick={onBackClick}>
      <div className={classes.item}>
        <DescriptionItem header={"Build number"} value={build} />
      </div>
      <div className={classes.item}>
        <DescriptionItem header={"Host name"} value={host} />
      </div>
      <div className={classes.item}>
        <DescriptionItem
          header={"MemSql cluster name"}
          value={"10.5.19.30"}
        />
      </div>
    </MaterialCard>
  );
};

export default ConfigurationsCard;
