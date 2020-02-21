import React from 'react';

import {
  AppBar, Toolbar, Typography
} from "@material-ui/core";

import CreateDialog from "../Dialog/Create";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" style={{flex: 1}}>
          My Exercise DataBase
        </Typography>

        <CreateDialog />
      </Toolbar>
    </AppBar>
  );
}
