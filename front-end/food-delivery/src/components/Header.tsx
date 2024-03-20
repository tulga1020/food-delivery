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
export const Header = () => {
  const [search, setSearch] = useState("");
  const searchHandler = () => {
    setSearch(search!);
  };
  return (
    <div className="bg-white w-screen ">
      <div className="w-[1280px] flex justify-between mx-auto my-4">
        <button className="flex justify-between w-4/12 items-center">
          <PineconeLogo />
          <div> Нүүр </div>
          <div> Хоолны цэс </div>
          <div> Хүргэлтийн бүс </div>
        </button>
        <button className="flex  w-4/12 items-center">
          <div>
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
          </div>
          <div className="flex gap-2 w-25 h-10 py-2 px-4 items-center ">
            <Bucket />
            <div>Сагс</div>
          </div>
          <div className="flex gap-2 w-25 h-10 py-2 px-4 items-center">
            <ProfileLogo />
            <div>Нэвтрэх</div>
          </div>
        </button>
      </div>
    </div>
  );
};
