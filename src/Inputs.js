import React from "react";
import logo, { ReactComponent } from "./logo.svg";

import { makeStyles } from "@material-ui/core/styles";
import { OutlinedInput, Grid, ButtonGroup, Button } from "@material-ui/core";

const classes = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  input: {
    margin: theme.spacing(1)
  }
}));
export default class Inputs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={classes.container}>
        <OutlinedInput
          placeholder="Test Password"
          className={classes.input}
          inputProps={{
            "aria-label": "description"
          }}
        />
        <OutlinedInput
          placeholder="Test Salt"
          className={classes.input}
          inputProps={{
            "aria-label": "description"
          }}
        />
        <OutlinedInput
          disabled
          value={this.props.hex}
          className={classes.input}
          inputProps={{
            "aria-label": "description"
          }}
        />
      </div>
    );
  }
}
