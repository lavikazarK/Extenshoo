/*global chrome*/
import React from "react";
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
  return (
    <MaterialCard title={"Configurations"} onBackClick={onBackClick}>
      <div className={classes.item}>
        <DescriptionItem header={"Build number"} value={"10.456.32"} />
      </div>
      <div className={classes.item}>
        <DescriptionItem header={"Host name"} value={"localhost"} />
      </div>
      <div className={classes.item}>
        <DescriptionItem
          header={"MemSql cluster name"}
          value={"cluster name"}
        />
      </div>
    </MaterialCard>
  );
};

export default ConfigurationsCard;
