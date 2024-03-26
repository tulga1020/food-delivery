"use client";

import { CheckBox, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FilledInput,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Input,
  TextField,
  Typography,
  InputLabel,
  FormHelperText,
  Box,
} from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { palette } from "@mui/system";
const inputfill = grey[500];
const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },

    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
  },
});
const primary = {
  main: "#1976d2",
  light: "#42a5f5",
  dark: "#1565c0",
  contrastText: "#fff",
};
export const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const emailInputHandler = () => {
    // setEmailInput(!emailInput);
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <div className="w-[448px] h-fit flex flex-col gap-8 p-8 items-center justify-center">
      <Typography variant="h4">
        <Box sx={{ fontFamily: "sans-serif", fontWeight: "700" }}>
          Бүртгүүлэх
        </Box>
      </Typography>
      <form className="flex flex-col w-full gap-4">
        <div className="flex flex-col w-full gap-2">
          <label>Нэр</label>
          <Input
            required
            placeholder="Нэрээ оруулна уу"
            sx={{ bgcolor: { inputfill } }}
            disableUnderline
          />
        </div>
        <div className="flex flex-col w-full  gap-2">
          <label>Имэйл</label>
          <TextField
            required
            placeholder="И-мэйл ээ оруулна уу"
            variant="filled"
            hiddenLabel
          />
        </div>
        <div className="flex flex-col w-full  gap-2">
          <label>Хаяг</label>
          <TextField
            required
            placeholder="Та хаягаа оруулна уу"
            variant="filled"
            hiddenLabel
          />
        </div>
        <div className="flex flex-col w-full  gap-2">
          <label>Нууц үг</label>
          <FormControl
            sx={{ width: "25ch" }}
            variant="filled"
            className="w-full"
            hiddenLabel
            required
          >
            <FilledInput
              id="filled-adornment-password"
              placeholder="Нууц үгээ оруулна уу"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>{" "}
        </div>
        <div className="flex flex-col w-full  gap-2">
          <label>Нууц үг давтах</label>
          <FormControl
            sx={{ width: "25ch" }}
            variant="filled"
            className="w-full"
            hiddenLabel
            required
          >
            <FilledInput
              id="filled-adornment-password"
              placeholder="Нууц үгээ оруулна уу"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
      </form>
      <div className="w-full flex flex-col gap-4">
        <FormControlLabel
          required
          control={<Checkbox />}
          label="Үйлчилгээний нөхцөл зөвшөөрнө үү"
        />
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            fullWidth
            sx={{ color: "white", backgroundColor: "#18BA51" }}
          >
            Бүртгүүлэх
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
};
