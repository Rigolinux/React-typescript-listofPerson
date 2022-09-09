import { CustomDialog } from "@/pages/Home/components";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { FavoriteTable } from "./FavoriteTable";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { dialogCloseSubject$, dialogOpenSubject$ } from "@/pages/Home/components/CustomDialog/CustomDialog";

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject(true);
  };
  return (
    <>
    <CustomDialog >
      <FavoriteTable />
    </CustomDialog>
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <IconButton color="secondary" aria-label="favorites" component="label" onClick={handleClick}>
            <FavoriteIcon />
          </IconButton>
      </Toolbar>
    </AppBar>
    </>
  );
};

export default Navbar;
