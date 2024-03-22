"use client";

import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { inputClasses } from "@mui/material";

export const TextFieldHiddenLabel = (props: any) => {
  const { placeholder, inputClasses } = props;
  return (
    <Stack
      component="form"
      sx={{
        width: "25ch",
      }}
      spacing={2}
      noValidate
      autoComplete="off"
      className={inputClasses}
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        placeholder={placeholder}
        variant="filled"
        size="small"
      />
    </Stack>
  );
};
