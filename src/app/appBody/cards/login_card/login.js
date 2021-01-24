/*global chrome*/
import React from "react";
import MaterialCard from "../../../../common/components/card/material_card";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import DescriptionItem from "../../../../common/components/description_item/description_item";
import ActionButton from "../../../../common/components/action_button/action_button";

const useStyles = makeStyles(() => ({
  item: {
    marginTop: 15
  }
}));

const LoginCard = ({ onBackClick }) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");

  return (
    <MaterialCard title={"Login as"} onBackClick={onBackClick}>
      <div className={classes.item}>
        <DescriptionItem
          header={"Customer"}
          value={"Kenshoo / Liat Gofshtein"}
        />
      </div>
      <div className={classes.item}>
        <DescriptionItem header={"Agency"} value={"Digital River"} />
      </div>
      <TextField
        style={{ marginTop: 35, width: 251 }}
        label="Email"
        variant="outlined"
        onChange={e => setEmail(e.target.value)}
      />
      <div className={classes.item}>
        <ActionButton onClick={() => {}} buttonName={"Login"} />
      </div>
    </MaterialCard>
  );
};

export default LoginCard;
