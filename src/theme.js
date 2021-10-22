import React from 'react';
import { createTheme } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue'

const theme = createTheme({
  palette: {
    primary: {
      main: green[400],
    },
    secondary: {
      main: blue[300]
    }
  },
});

export default theme;
