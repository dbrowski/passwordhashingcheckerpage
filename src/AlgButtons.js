import React from "react";
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
  FormControl
} from "@material-ui/core";

export default class AlgButtons extends React.Component {
  render() {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Hashing Algorithm</FormLabel>
        <RadioGroup
          row
          aria-label="algs"
          name="algs"
          value={this.props.algSelected}
          onChange={this.props.handleRadioChange}
        >
          <FormControlLabel value="SHA" control={<Radio />} label="SHA" />
          <FormControlLabel value="SHA256" control={<Radio />} label="SHA256" />
          <FormControlLabel value="SHA512" control={<Radio />} label="SHA512" />
        </RadioGroup>
      </FormControl>
    );
  }
}
