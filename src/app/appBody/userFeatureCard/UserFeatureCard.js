/*global chrome*/
import React, { useState } from "react";
import styled from "styled-components";
import BaseCard, {
  CardHeader as CardHeaderBase
} from "../../../common/components/card/card";
import { Dropdown as BaseDropDown} from "semantic-ui-react";
import Switch from "@material-ui/core/Switch";

const CardHeader = styled(CardHeaderBase)`
  margin-bottom: 24px;
`;

const Card = styled(BaseCard)`
  width: 90%;
  padding: 20px 23px 23px;
  margin-bottom: 14px;
`;

const Dropdown = styled(BaseDropDown)`
  margin-bottom: 10px;
`;

const UserFeatureCard = () => {
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
    <Card background={"WHITE"} withShadow={false}>
      <CardHeader>User Feature Management</CardHeader>
      <Dropdown
        fluid
        search
        selection
        options={agencyOptions}
        onChange={onAgenciesDropDownChange}
        placeholder="Select Agency"
      />
      <Dropdown
        fluid
        search
        selection
        options={userFeatureOptions}
        onChange={onUserFeaturesDropDownChange}
        placeholder="Select User feature"
      />
      <Switch
        checked={isToggle}
        onChange={onToggleChange}
        color="primary"
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </Card>
  );
};

export default UserFeatureCard;
