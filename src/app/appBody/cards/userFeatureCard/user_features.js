/*global chrome*/
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import MaterialCard from "../../../../common/components/card/material_card";
import Switch from "@material-ui/core/Switch";

const NewUserFeatureCard = ({ onBackClick }) => {
  const [userFeature, setUserFeature] = useState("");
  const [isToggle, setIsToggle] = useState(false);
  const [agency, setAgency] = useState([]);
  const [agencyOptions, setAgencyOptions] = useState([]);
  const [userFeatureOptions, setUserFeatureOptions] = useState([]);

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch (message.type) {
      case "GOT_AGENCIES":
        const agencies = Object.entries(message.agencies).map(
          ([key, value]) => {
            return {
              key,
              value: value.agencyId,
              text: value.agencyName
            };
          }
        );
        setAgencyOptions(agencies);
        break;
      case "GOT_USER_FEATURES":
        const userFeatures = Object.entries(message.userFeatures).map(
          ([key, value]) => {
            return {
              key,
              value: { userFeature: value.userFeature, enabled: value.enabled },
              text: value.userFeature
            };
          }
        );
        setUserFeatureOptions(userFeatures);
        break;
    }
    console.log(message);
  });

  const onToggleChange = event => {
    const isChecked = event.target.checked;
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, {
        type: "SET_USER_FEATURE",
        data: {
          agency,
          userFeature,
          isToggle: isChecked,
          tabId: tabs[0].id
        }
      });
    });
    setIsToggle(isChecked);
  };

  const onAgenciesDropDownChange = (e, { value }) => {
    console.log(value);
    setAgency(value);
    setIsToggle(false);
    setUserFeature(undefined);
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, {
        type: "USER_FEATURES",
        data: { agency: value }
      });
    });
  };

  const onUserFeaturesDropDownChange = (e, { value }) => {
    setUserFeature(value.userFeature);
    setIsToggle(value.enabled);
  };

  return (
    <MaterialCard title={"User Features"} onBackClick={onBackClick}>
      <Autocomplete
        style={{ marginTop: 25 }}
        options={agencyOptions}
        getOptionLabel={option => option.text}
        onChange={onAgenciesDropDownChange}
        renderInput={params => (
          <TextField {...params} label="Select Agency" variant="outlined" />
        )}
      />
      <Autocomplete
        style={{ marginTop: 15, marginBottom: 15 }}
        ListboxProps={{
          style: { maxHeight: "10rem" },
          position: "bottom-start"
        }}
        options={userFeatureOptions}
        getOptionLabel={option => option.text}
        onChange={onUserFeaturesDropDownChange}
        renderInput={params => (
          <TextField
            {...params}
            label="Select User feature"
            variant="outlined"
          />
        )}
      />
      <Switch
        checked={isToggle}
        onChange={onToggleChange}
        color="primary"
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </MaterialCard>
  );
};

export default NewUserFeatureCard;
