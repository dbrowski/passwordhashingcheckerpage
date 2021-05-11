import React from "react";
import "./App.css";
import forge from "node-forge";
import AlgButtons from "./AlgButtons";
import HashItButton from "./HashItButton";
import InfoCard from "./InfoCard";
import {
  Grid,
  Card,
  TextField,
  Container,
  Divider,
  Typography,
} from "@material-ui/core";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      salt: "",
      testPassword: "",
      hashedPassword: "",
      algSelected: "SHA",
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

  handleRadioChange = (event) => {
    this.setState({ algSelected: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({
      testPassword: event.target.value,
    });
  };

  handleSaltChange = (event) => {
    this.setState({
      salt: event.target.value,
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
      pHash = this.hashingSHA(sHex, pHex);
    } else if (alg === "SHA256") {
      pHash = this.hashingSHA256(sHex, pHex);
    } else if (alg === "SHA512") {
      pHash = this.hashingSHA512(sHex, pHex);
    }

    const hashandsalt = pHash + sHex;
    const b64_hashandsalt = forge.util.encode64(hashandsalt);
    let hp = b64_hashandsalt;
    this.setState({
      hashedPassword: hp,
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
        <Container className="Main-Container" maxWidth="xl">
          <Card>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography
                  style={{
                    color: "#2e4355",
                    maxWidth: "100%",
                    padding: ".5rem 15%",
                  }}
                  variant="h4"
                  color="textPrimary"
                  align="centerdd"
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
                  <Divider style={{ margin: "2vh 0" }} />
                  <AlgButtons
                    algSelected={this.state.aldgSelected}
                    handleRadioChange={this.handleRadioChange}
                  />
                  <HashItButton type="submit">Hash It</HashItButton>
                  <Divider style={{ margin: "2vh 0" }} />
                  <TextField
                    fullWidth
                    id="outlined-read-only-input"
                    label="Hashed Password Value"
                    multiline
                    rows="4"
                    value={this.state ? this.state.hashedPassword : null}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                  />
                </form>
              </Grid>
              <Grid item xs={12}>
                <InfoCard></InfoCard>
              </Grid>
            </Grid>
            <Grid container spacing={3} justify="center"></Grid>
          </Card>
        </Container>
      </div>
    );
  }
}

export default App;
