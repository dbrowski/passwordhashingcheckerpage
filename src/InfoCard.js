import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import HelpIcon from "@material-ui/icons/Help";
import {
  Card,
  Typography,
  CardContent,
  CardActions,
  IconButton
} from "@material-ui/core";

const styles = {
  card: {
    backgroundColor: "",
    minWidth: 275
  },
  asterisk: {
    color: "#2e4355",
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    color: "#2e4355",
    variant: "h1"
  },
  body: {
    color: "#2e4355"
  },
  warning: {
    color: "#2e4355",
    lineHeight: 0.9,
    display: "block"
  },
  button: {
    color: "#2e4355",
    borderColor: "#2e4355"
  },
  pos: {
    marginBottom: 12
  }
};

function InfoCard(props) {
  const { classes } = props;
  const ast = <span className={classes.asterisk}>*</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          variant="h3"
          color="textPrimary"
          gutterBottom
        >
          Password Hashing Checker
        </Typography>
        <Typography
          className={classes.body}
          variant="body1"
          component="h2"
          align="left"
          gutterBottom
        >
          This tool is for you to check that your algorithm outputs the same
          encoded password as the LDAP userPassword hashing algorithm. Use a
          test salt and test password and compare the output of your algorithm
          with the one here.
        </Typography>

        <Typography className={classes.warning} variant="caption" align="left">
          {ast}Not meant for use with real passwords.
          <br />
          {ast}Use a dummy password!
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          className={classes.button}
          variant="outlined"
          size="small"
          href="https://tools.ietf.org/id/draft-stroeder-hashed-userpassword-values-01.html"
        >
          <HelpIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

InfoCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InfoCard);
