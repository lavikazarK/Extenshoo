/*global chrome*/
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  item: {
    padding: 0
  },
  checkbox: {
    paddingRight: 5
  }
}));

const ListCmp = ({
  paramName,
  defaultValue,
  value: currentValue,
  paramNewValues,
  setParamNewValues,
  availableValues
}) => {
  const classes = useStyles();

  //todo - put defaultValue or currentValue to initial checkedItems array
  const [checkedItems, setCheckedItems] = React.useState([]);
  const availableValuesList = availableValues.split(",");

  const handleToggle = value => () => {
    const currentIndex = checkedItems.indexOf(value);
    const newChecked = [...checkedItems];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setCheckedItems(newChecked);
    setParamNewValues([
      ...paramNewValues,
      { name: paramName, value: newChecked }
    ]); //todo - check duplications
  };

  return (
    <List classes={{ root: classes.item }}>
      {availableValuesList.map(value => (
        <ListItem classes={{ root: classes.item }}>
          <Checkbox
            classes={{ root: classes.checkbox }}
            edge="start"
            color="primary"
            checked={checkedItems.indexOf(value) !== -1}
            tabIndex={-1}
            disableRipple
            onClick={handleToggle(value)}
          />
          <ListItemText primary={value} />
        </ListItem>
      ))}
    </List>
  );
};

export default ListCmp;
