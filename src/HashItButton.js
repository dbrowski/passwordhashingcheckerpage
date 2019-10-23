import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    background: "#2e4355",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 255, 255, 0)",
    color: "white",
    height: 48,
    padding: "0 30px",
    "&:focus": {
      boxShadow: "0 0 0 0.2rem #3f5466"
    },
    "&:hover": {
      backgroundColor: "#718ba4",
      borderColor: "#718ba4",
      boxShadow: "none"
    }
  }
};

function HashItButton(props) {
  const { classes } = props;
  return (
    <Button className={classes.root} onClick={props.onClick}>
      Hash It
    </Button>
  );
}

HashItButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HashItButton);
