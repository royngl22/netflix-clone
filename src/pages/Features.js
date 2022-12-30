import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import React from "react";
import BorderedBottomBox from "../components/BorderedBottomBox";
import TvIMG from "./../assets/images/tv.png";
import TvVideo from "./../assets/videos/tv.m4v";
import MobileIMG from "./../assets/images/mobile.jpg";
import DevicesIMG from "./../assets/images/devices.png";
import KidsIMG from "./../assets/images/kids.png";

export default function Features() {
  return (
    <Box sx={{ bgcolor: "common.black", color: "common.white" }}>
      <BorderedBottomBox>
        <Container maxWidth="md" sx={{ py: 10 }}>
          <Grid container alignItems="center" columnSpacing={12}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                component={"h1"}
                fontWeight={600}
                gutterBottom
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                Enjoy on your TV.
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative" }}>
                <Box>
                  <img src={TvIMG} alt="tv_img" width="100%" height="100%" />
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    top: "20.4%",
                    left: "12.8%",
                    width: "73.5%",
                  }}
                >
                  <video
                    src={TvVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    width="100%"
                    height="100%"
                  ></video>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </BorderedBottomBox>

      <BorderedBottomBox>
        <Container maxWidth="md" sx={{ py: 10 }}>
          <Grid container alignItems="center" columnSpacing={12}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                order: {
                  xs: 2,
                  md: 1,
                },
              }}
            >
              <Box
                sx={{
                  marginBottom: {
                    xs: "100px",
                    md: 0,
                  },
                }}
              >
                <img
                  src={MobileIMG}
                  alt="img_mobile"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                order: {
                  xs: 1,
                  md: 2,
                },
              }}
            >
              <Typography
                variant="h3"
                component={"h1"}
                fontWeight={600}
                gutterBottom
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                Download your shows to watch offline.
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                Save your favorites easily and always have something to watch.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </BorderedBottomBox>

      <BorderedBottomBox>
        <Container maxWidth="md" sx={{ py: 10 }}>
          <Grid container alignItems="center" columnSpacing={12}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                component={"h1"}
                fontWeight={600}
                gutterBottom
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                Watch everywhere.
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <img
                  src={DevicesIMG}
                  alt="devices_img"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </BorderedBottomBox>

      <BorderedBottomBox>
        <Container maxWidth="md" sx={{ py: 10 }}>
          <Grid container alignItems="center" columnSpacing={12}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                order: {
                  xs: 2,
                  md: 1,
                },
              }}
            >
              <Box>
                <img
                  src={KidsIMG}
                  alt="img_mobile"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                order: {
                  xs: 1,
                  md: 2,
                },
              }}
            >
              <Typography
                variant="h3"
                component={"h1"}
                fontWeight={600}
                gutterBottom
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                Create profiles for kids.
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </BorderedBottomBox>
    </Box>
  );
}
