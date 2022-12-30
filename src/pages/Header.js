import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BackdropIMG from "./../assets/images/backdrop.jpg";
import NetflixLogo from "./../assets/images/netflix.svg";
import BorderedBottomBox from "../components/BorderedBottomBox";

export default function Header(props) {
  const [lang, setLang] = useState("ID");
  return (
    <BorderedBottomBox>
      <AppBar
        elevation={0}
        sx={{ bgcolor: "transparent", my: 2, position: "absolute" }}
      >
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs>
              <Box
                sx={{
                  width: {
                    xs: "85px",
                    sm: "136px",
                  },
                  height: {
                    xs: "32px",
                    sm: "42px",
                  },
                }}
              >
                <img src={NetflixLogo} alt="logo" width="100%" height="100%" />
              </Box>
            </Grid>
            <Grid item xs="auto">
              <Select
                value={lang}
                onChange={(e) => setLang(e.target?.value)}
                size="small"
                sx={{
                  color: "common.white",
                  border: "1px solid white",
                  height: {
                    xs: "25px",
                    sm: "42px",
                  },
                  marginRight: {
                    xs: "10px",
                    sm: "50px",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },

                  "& .MuiSelect-icon": {
                    color: "white",
                  },
                }}
              >
                <MenuItem value="ID">Indonesia</MenuItem>
                <MenuItem value="EN">English</MenuItem>
              </Select>
            </Grid>
            <Grid item xs="auto">
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  height: {
                    xs: "25px",
                    sm: "42px",
                  },
                  padding: {
                    xs: 0,
                    sm: "0 15px",
                  },
                }}
              >
                Sign In
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          position: "relative",
          height: "570px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&::after": {
            position: "absolute",
            content: '""',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: "rgba(0,0,0,0.4)",
            backgroundImage: `linear-gradient(
                  to bottom,
                  rgba(0,0,0,0.6) 0%,
                  rgba(0,0,0,0) 60%,
                  rgba(0,0,0,0.8) 100%
              )`,
          },
        }}
      >
        <LazyLoadImage
          alt="backdrop_img"
          height="100%"
          src={BackdropIMG}
          width="100%"
          style={{
            objectFit: "cover",
            position: "absolute",
          }}
          loading="lazy"
        />

        <Container
          maxWidth="sm"
          sx={{
            position: "relative",
            zIndex: 999,
          }}
        >
          <Typography
            color="common.white"
            variant="h3"
            component="h1"
            fontWeight={600}
            textAlign="center"
          >
            Unlimited movies, TV shows, and more.
          </Typography>

          <Typography
            color="common.white"
            variant="h5"
            component="p"
            textAlign="center"
            gutterBottom
          >
            Watch anywhere. Cancel anytime.
          </Typography>

          <Typography
            textAlign="center"
            color="common.white"
            variant="subtitle1"
            sx={{ my: 4 }}
          >
            Ready to watch? Enter your email to create or restart your
            membership.
          </Typography>

          <Container>
            <Grid container>
              <Grid item xs>
                <TextField
                  label="Email address"
                  variant="filled"
                  fullWidth
                  sx={{ bgcolor: "#fff" }}
                />
              </Grid>
              <Grid item xs="auto">
                <Button
                  variant="contained"
                  size="large"
                  sx={{ height: "100%", borderRadius: "2px" }}
                >
                  Get Started
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Box>
    </BorderedBottomBox>
  );
}
