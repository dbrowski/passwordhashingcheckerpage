import React from "react";
import "./App.css";
import forge from "node-forge";
import AlgButtons from "./AlgButtons";
import HashItButton from "./HashItButton";
import InfoCard from "./InfoCard";
import { TextField, Typography, Container, Divider } from "@material-ui/core";

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
  };

  handleSaltChange = event => {
    this.setState({
      salt: event.target.value
    });
  };

  handleSubmit = (event, state) => {
    event.preventDefault();
    if (this.state.salt && this.state.testPassword) {
      this.hash();
    }
  };

  hash() {
    const alg = this.state.algSelected;
    const s = this.state.salt;
    const p = this.state.testPassword;
    let pBuffer = forge.util.createBuffer(p, "utf8");
    const sBuffer = forge.util.createBuffer(s, "utf8");
    const pHex = pBuffer.toHex();
    const sHex = sBuffer.toHex();
    let pHash;

    if (alg === "SHA") {
      pHash = this.hashingSHA(pHex, sHex);
    } else if (alg === "SHA256") {
      pHash = this.hashingSHA256(pHex, sHex);
    } else if (alg === "SHA512") {
      pHash = this.hashingSHA512(pHex, sHex);
    }

    const hashandsalt = pHash + sHex;
    const b64_hashandsalt = forge.util.encode64(hashandsalt);
    let hp = b64_hashandsalt;
    this.setState({
      hashedPassword: hp
    });
  }

  hashingSHA = (sHex, pHex) => {
    const md = forge.md.sha1.create();
    md.update(pHex + sHex);
    const pHash = md.digest().toHex();
    return pHash;
  };

  hashingSHA256 = (sHex, pHex) => {
    const md = forge.md.sha256.create();
    md.update(pHex + sHex);
    const pHash = md.digest().toHex();
    return pHash;
  };

  hashingSHA512 = (sHex, pHex) => {
    const md = forge.md.sha512.create();
    md.update(pHex + sHex);
    const pHash = md.digest().toHex();
    return pHash;
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
          <InfoCard></InfoCard>
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
            <HashItButton type="submit">Hash It</HashItButton>
            <TextField
              fullWidth
              id="outlined-read-only-input"
              label="Hashed Password Value"
              multiline
              rows="4"
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
