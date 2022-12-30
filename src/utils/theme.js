import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const config = createTheme({
  palette: {
    primary: {
      main: "#E50914",
    },
  },
});

const theme = responsiveFontSizes(config);

export default theme;
