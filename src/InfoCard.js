import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Help, ArrowRight, Check } from "@material-ui/icons";
import {
  Card,
  Typography,
  CardContent,
  CardActions,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";

const styles = {
  card: {
    backgroundColor: "",
    minWidth: 250,
    maxHeight: "50vh",
    overflow: "auto"
  },
  title: {
    color: "#2e4355",
    variant: "h1",
    padding: ".5rem 10rem"
  },
  body: {
    color: "#2e4355",
    padding: ".5rem 10rem"
  },
  itemInList: {
    color: "#2e4355",
    paddingTop: "0px",
    paddingLeft: "0px"
  },
  itemText: {
    paddingLeft: "0px"
  },
  itemIcon: {
    paddingLeft: "5rem",
    paddingRight: "0rem"
  },
  warning: {
    color: "#2e4355",
    lineHeight: 0.9,
    display: "block"
  },
  button: {
    color: "#2e4355",
    borderColor: "#2e4355"
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
          align="left"
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
          Password Hashing makes password storage and management more secure.
          Hashing uses a formula to transform a password into a predictable, yet
          encrypted form that obscures the actual password and makes it much
          harder for bad actors to decipher it.
        </Typography>

        <Typography
          className={classes.body}
          variant="body1"
          component="h2"
          align="left"
          gutterBottom
        >
          When using a one-way hashing algorithm, a bad actor would benefit even
          less from gaining access to the encoded password. These one-way
          hashing algorithms make it near impossible to get the original
          password even when you know the output and the algorithm used to
          create that output. Hashing algorithms are an important part of
          securing digital properties, but it shouldn’t be the only thing.
          Consider password hashing part of a more comprehensive security
          approach.
        </Typography>
        <Typography
          className={classes.body}
          variant="body1"
          component="h2"
          align="left"
          gutterBottom
        >
          When comparing password hashing algorithms, you have to verify that
          you have the same input for both hashing algorithms by taking that
          input and putting it through each algorithm to see if you get the same
          output (note that rare “hash collisions” can occur where two inputs
          generate the same output, so you still can’t be 100% sure you have the
          right input).
        </Typography>
        <Typography
          className={classes.body}
          variant="body1"
          component="h2"
          align="left"
          gutterBottom
        >
          This Password Hashing Checker tool is useful when you have a system of
          hashed passwords and want to transfer the hashed passwords over to
          another system. There are several reasons why you may want to do this:
          <List>
            <ListItem className={classes.itemInList}>
              <ListItemIcon className={classes.itemIcon}>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText
                className={classes.itemText}
                inset
                primary="Migrating to a new directory"
              />
            </ListItem>
            <ListItem className={classes.itemInList}>
              <ListItemIcon className={classes.itemIcon}>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText
                className={classes.itemText}
                inset
                primary="Creating a backup system"
              />
            </ListItem>
            <ListItem className={classes.itemInList}>
              <ListItemIcon className={classes.itemIcon}>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText
                className={classes.itemText}
                inset
                primary="Distributing
          load for scale"
              />
            </ListItem>
          </List>
        </Typography>
        <Typography
          className={classes.body}
          variant="body1"
          component="h2"
          align="left"
          gutterBottom
        >
          You want to ensure that the new system you’re moving too will accept
          your hashed or pre-encoded passwords. For example, you can import
          users and their pre-encoded passwords into PingOne for Customers, but,
          for PingOne for Customers to be able to support it when a user
          authenticates, we’ll need to be able to reproduce the hashed password
          in the same way. If the original system and the one you’re moving two
          use two different hashing algorithms, a user might be able to
          authenticate into one but not the other.
        </Typography>
        <Typography
          className={classes.body}
          variant="body1"
          component="h2"
          align="left"
          gutterBottom
        >
          Use the tool by following these steps:
          <List>
            <ListItem className={classes.itemInList}>
              <ListItemIcon className={classes.itemIcon}>
                <Check />
              </ListItemIcon>
              <ListItemText
                className={classes.itemText}
                inset
                primary="Grab a test password and salt."
              />
            </ListItem>
            <ListItem className={classes.itemInList}>
              <ListItemIcon className={classes.itemIcon}>
                <Check />
              </ListItemIcon>
              <ListItemText
                className={classes.itemText}
                inset
                primary="Run the test password and salt through your program that encodes the
          password using a given algorithm."
              />
            </ListItem>
            <ListItem className={classes.itemInList}>
              <ListItemIcon className={classes.itemIcon}>
                <Check />
              </ListItemIcon>
              <ListItemText
                className={classes.itemText}
                inset
                primary="Use the same test password and salt and input them into the respective
          fields in this tool."
              />
            </ListItem>
            <ListItem className={classes.itemInList}>
              <ListItemIcon className={classes.itemIcon}>
                <Check />
              </ListItemIcon>
              <ListItemText
                className={classes.itemText}
                inset
                primary="Choose the same algorithm."
              />
            </ListItem>
            <ListItem className={classes.itemInList}>
              <ListItemIcon className={classes.itemIcon}>
                <Check />
              </ListItemIcon>
              <ListItemText
                className={classes.itemText}
                inset
                primary="Press the “Hash It” button."
              />
            </ListItem>
            <ListItem className={classes.itemInList}>
              <ListItemIcon className={classes.itemIcon}>
                <Check />
              </ListItemIcon>
              <ListItemText
                className={classes.itemText}
                inset
                primary="Compare the output here with the output from your program."
              />
            </ListItem>
            <ListItem className={classes.itemInList}>
              <ListItemIcon className={classes.itemIcon}>
                <Check />
              </ListItemIcon>
              <ListItemText
                className={classes.itemText}
                inset
                primary="If the outputs are equal, then your program aligns with the LDAP
          hashed password algorithm and one that PingOne for Customers accepts!"
              />
            </ListItem>
          </List>
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
          <Help />
        </IconButton>
      </CardActions>
    </Card>
  );
}

InfoCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InfoCard);
