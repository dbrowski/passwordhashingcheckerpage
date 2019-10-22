import React from "react";
import "./App.css";
import forge from "node-forge";
import AlgButtons from "./AlgButtons";
import HashItButton from "./HashItButton";
import { TextField, Typography, Container, Divider } from "@material-ui/core";

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
    this.handleRadioChange = this.handleRadioChange.bind(this);

    this.hash = this.hash.bind(this);
    this.hashingSHA = this.hashingSHA.bind(this);
    this.hashingSHA256 = this.hashingSHA256.bind(this);
    this.hashingSHA512 = this.hashingSHA512.bind(this);
  }

  handleRadioChange = event => {
    this.setState({ algSelected: event.target.value });
  };

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

  hash() {
    let alg = this.state.algSelected;
    if (alg === "SHA") {
      this.hashingSHA();
    } else if (alg === "SHA256") {
      this.hashingSHA256();
    } else if (alg === "SHA512") {
      this.hashingSHA512();
    }
  }

  hashingSHA = () => {
    const md = forge.md.sha1.create();
    const s = this.state.salt;
    const p = this.state.testPassword;
    md.update(p);
    console.log("SHA1");
    console.log(forge.util.encode64(md.digest().toHex()));
    let hp = forge.util.encode64(md.digest().toHex());
    this.setState({
      hashedPassword: hp
    });
  };

  hashingSHA256 = () => {
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

  hashingSHA512 = () => {
    const md = forge.md.sha512.create();
    const s = this.state.salt;
    const p = this.state.testPassword;
    md.update(p);
    console.log("SHA512");
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
            color="#2E4355"
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
              rows="4"
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
            <HashItButton onClick={this.hash}>Hash It</HashItButton>
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
