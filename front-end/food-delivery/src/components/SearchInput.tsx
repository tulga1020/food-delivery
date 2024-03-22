"use client";
import { PineconeLogo, Bucket, ProfileLogo } from "./Svg";
import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  InputBase,
  IconButton,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
export const SearchInput = () => {
  const [search, setSearch] = useState("");
  const searchHandler = () => {
    setSearch(search!);
  };
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 260,
        height: 39,
        border: "solid",
      }}
    >
      <IconButton
        type="button"
        sx={{
          p: "5px",
          width: "24px",
          height: "24px",
          fontWeight: "800",
        }}
        aria-label="search"
        onClick={searchHandler}
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Хайх"
        onChange={(e) => setSearch(e.target.value)}
      />
    </Paper>
  );
};
