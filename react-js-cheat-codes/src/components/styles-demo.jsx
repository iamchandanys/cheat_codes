import React from "react";
import { makeStyles } from "@material-ui/core/styles"; // npm i @material-ui/core --force
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  // key & value should be camelCase.
  headerText: {
    color: "red",
  },
  subHeaderText: {
    color: "blue",
    textDecoration: "underLine",
  },
}));

const StylesDemo = () => {
  const classes = useStyles();

  return (
    <div>
      <h3 className={clsx(classes.headerText)}>Style Demo</h3>
      <h4 className={clsx(classes.subHeaderText)}>Style Demo</h4>
    </div>
  );
};

export default StylesDemo;
