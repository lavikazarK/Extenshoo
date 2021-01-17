import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ChevronLeft } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    padding: 23,
    width: "90%",
    marginBottom: 20
  },
  header: {},
  button: {
    backgroundColor: "lightgray",
    marginRight: 8
  }
}));

const MaterialCard = ({ children, title, onBackClick }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActions className={classes.header}>
        <IconButton className={classes.button}>
          <ChevronLeft onClick={onBackClick} />
        </IconButton>
        <Typography variant="h5">{title}</Typography>
      </CardActions>
      {children}
    </Card>
  );
};

export default MaterialCard;
