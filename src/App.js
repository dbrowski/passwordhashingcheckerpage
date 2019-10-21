import React from "react";
import logo, { ReactComponent } from "./logo.svg";
import Inputs from "./Inputs";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import forge from "node-forge";
import {
  Avatar,
  Button,
  ButtonGroup,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Input,
  Radio,
  RadioGroup,
  FormLabel,
  FormControl,
  Divider
} from "@material-ui/core";
import AlgButtons from "./AlgButtons";

function SHA1() {
  var forge = require("node-forge");
  var md = forge.md.sha1.create();
  md.update("The quick brown fox jumps over the lazy dog");
  let hex = md.digest().toHex();
  console.log("sha1");
  return hex;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      salt: "",
      testPassword: "",
      hashedPassword: "",
      algSelected: "SHA"
    };
    this.handleSaltChange = this.handleSaltChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hashing = this.hashing.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  algButtons = () => {};

  handleRadioChange = event => {
    this.setState({ algSelected: event.target.value });
  };

  handleClick() {
    let hex = SHA1();
    console.log("handleClick");
    this.setState({
      hashed: hex
    });
  }
  handlePasswordChange = event => {
    this.setState({
      testPassword: event.target.value
    });
    console.log(event.target.value);
  };

  handleSaltChange = event => {
    this.setState({
      salt: event.target.value
    });
    console.log(event.target.value);
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("submit");
    console.log(event.target);
  };

  hashing = () => {
    const md = forge.md.sha256.create();
    const s = this.state.salt;
    const p = this.state.testPassword;
    md.update(p);
    console.log(forge.util.encode64(md.digest().toHex()));
    let hp = forge.util.encode64(md.digest().toHex());
    this.setState({
      hashedPassword: hp
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://images.pingidentity.com/image/upload/f_auto,q_auto/ping_dam/content/dam/ping-6-2-assets/blogs/headshots/Anthony-Dombrowski.jpg"
            className="App-logo"
            alt="logo"
          />
        </header>

        <Container className="Main-Container" maxWidth="xs">
          <Typography
            className="Title"
            component="h1"
            variant="h3"
            align="center"
            color="primary"
            gutterBottom
          >
            Password Hashing Checker
          </Typography>
          <form onSubmit={this.handleSubmit}>
            <TextField
              required
              fullWidth
              multiline
              rowsMax="4"
              id="salt"
              label="Salt"
              placeholder="Salt"
              margin="normal"
              variant="outlined"
              onChange={this.handleSaltChange}
              value={this.state.salt}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              required
              fullWidth
              id="test-password-input"
              label="Test Password"
              multiline
              rowsMax="4"
              placeholder="Test Password"
              margin="normal"
              variant="outlined"
              onChange={this.handlePasswordChange}
              value={this.state.testPassword}
              InputLabelProps={{ shrink: true }}
            />
            <Divider />
            <AlgButtons
              algSelected={this.state.algSelected}
              handleRadioChange={this.handleRadioChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.hashing}
            >
              Hash It
            </Button>
            <TextField
              fullWidth
              id="outlined-read-only-input"
              label="Hashed Password Value"
              multiline
              rowsMax="4"
              value={this.state ? this.state.hashedPassword : null}
              margin="normal"
              InputProps={{
                readOnly: true
              }}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
          </form>
        </Container>
      </div>
    );
  }
}

export default App;
