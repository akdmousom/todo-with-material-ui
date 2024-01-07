import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
      secondary: {
        light: '#55dab3',
        main: '#00a883',
        dark: '#007856',
        contrastText: '#000',
    }
    },
  });