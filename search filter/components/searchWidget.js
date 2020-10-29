import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default (props) => {
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={props.handleChange}
        value={props.searchBoxText}
      />
      <Button variant="contained" color="primary" onClick={props.searchFn}>
        Search
      </Button>
    </>
  );
};
