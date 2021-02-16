/*global chrome*/
import React, {useEffect, useState} from "react";
import MaterialCard from "../../../../common/components/card/material_card";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import ActionButton from "../../../../common/components/action_button/action_button";

const useStyles = makeStyles(() => ({
    buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: 251,
        marginTop: 100
    }
}));

const GlobalsCard = ({ onBackClick }) => {
    const classes = useStyles();

    const [globalName, setGlobalName] = useState("");
    const [globalValue, setGlobalValue] = useState("");
    const [options, setOptions] = useState([]);

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        switch (message.type) {
            case "GOT_GLOBALS":
                const globals = Object.entries(message.globals).map(
                    ([key, value]) => {
                        return {
                            key,
                            value: value.value,
                            text: value.name
                        };
                    }
                );
                setOptions(globals);
                break;
        }
    });

    const onApply = event => {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            chrome.tabs.sendMessage(tabs[0].id, {
                type: "SET_GLOBAL",
                data: {
                    name: globalName,
                    value: globalValue
                }
            });
        });
    };

    const onDelete = event => {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            chrome.tabs.sendMessage(tabs[0].id, {
                type: "DELETE_GLOBAL",
                data: {
                    name: globalName
                }
            });
        });
    };

    useEffect(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            chrome.tabs.sendMessage(tabs[0].id, {
                type: "GLOBALS",
                data: {}
            });
        });
    }, []);

    return (
        <MaterialCard title={"Globals"} onBackClick={onBackClick}>
            <Autocomplete
                style={{ marginTop: 25 }}
                options={options}
                getOptionLabel={option => option.text}
                renderInput={params => (
                    <TextField {...params} label="Global name" variant="outlined" />
                )}
                onInputChange={(event, value, reason) => {
                    debugger;
                    setGlobalName(value);
                    const selectedValue = value==="" ? value:options.find(option=>option.text === value).value
                    setGlobalValue(selectedValue)
                }}
                inputValue={globalName}
                clearOnBlur={false}
            />
            <TextField
                style={{ marginTop: 25, width: 251 }}
                label="Global value"
                variant="outlined"
                value={globalValue}
                onChange={e => setGlobalValue(e.target.value)}
            />
            <div className={classes.buttons}>
                <ActionButton onClick={onApply} buttonName={"Apply"} />
                <ActionButton onClick={onDelete} buttonName={"Delete"} />
            </div>
        </MaterialCard>
    );
};

export default GlobalsCard;
