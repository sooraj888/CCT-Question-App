import React, { FormEvent } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { NavigateFunction, useNavigate } from "react-router-dom";

const InputDetailsForm = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  const handleOnFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("submited");
    navigate("questions/1");
  };
  return (
    <div className="headding">
      <Box
        component="form"
        onSubmit={handleOnFormSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "330px",
          width: "250px",
          textAlign: "center",
          justifyContent: "space-between",
          p: 8,
          border: "1px solid grey",
          borderRadius: "10px",
        }}
      >
        <TextField label="name" required={true}></TextField>
        <Box>
          <FormControl>
            <FormLabel component={"legend"}>Gender</FormLabel>
            <RadioGroup defaultValue={"female"}>
              <FormControlLabel
                value="male"
                label="Male"
                control={<Radio />}
              ></FormControlLabel>
              <FormControlLabel
                value="female"
                label="Female"
                control={<Radio />}
              ></FormControlLabel>
              <FormControlLabel
                value="others"
                label="Others"
                control={<Radio />}
              ></FormControlLabel>
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel component={"legend"}>Language</FormLabel>
            <RadioGroup defaultValue={"English"}>
              <FormControlLabel
                value="Kannada"
                label="Kannada"
                control={<Radio />}
              ></FormControlLabel>
              <FormControlLabel
                value="English"
                label="English"
                control={<Radio />}
              ></FormControlLabel>
              <FormControlLabel
                value="Hindi"
                label="Hindi"
                control={<Radio />}
              ></FormControlLabel>
            </RadioGroup>
          </FormControl>
        </Box>

        <Button variant="contained" type="submit">
          {"submit"}
        </Button>
      </Box>
    </div>
  );
};

export default InputDetailsForm;
