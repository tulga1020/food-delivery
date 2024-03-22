"use client";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { use, useState } from "react";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailInput, setEmailInput] = useState(false);
  const emailInputHandler = () => {
    setEmailInput(!emailInput);
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <div className="w-[448px] h-[549px] flex flex-col items-center gap-12 p-8 ">
      <Typography variant="h4">Нэвтрэх</Typography>
      <form className="w-full h-fit flex flex-col gap-8">
        <div>
          <TextField className="w-full h-12" variant="filled" label="Имэйл" />
        </div>
        <div>
          <FormControl
            sx={{ width: "25ch" }}
            variant="filled"
            className="w-full"
          >
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
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
        <div className="flex justify-end">
          <Typography variant="body1">
            <Link href="/"> Нууц үг сэргээх</Link>
          </Typography>
        </div>
      </form>
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <Button variant="contained" className="w-full">
          Нэвтрэх
        </Button>
        <div>эсвэл</div>
        <Button variant="outlined" className="w-full">
          <Link href="/signup"> Бүртгүүлэх</Link>
        </Button>
      </div>
    </div>
  );
};
