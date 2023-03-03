import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import Image from "next/image";

export default function Hero() {
  const theme = useTheme();

  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: 5,
        [theme.breakpoints.down(500)]: {
          //   backgroundColor: "red",
        },
      }}
    >
      <Box sx={{ display: "flex", mb: 5 }}>
        <hr
          style={{
            width: "5%",
            backgroundColor: "#7ed192",
            height: 1,
            alignSelf: "center",
            marginRight: 10,
          }}
        />
        <Typography
          sx={{
            fontWeight: "bolder",
            color: "#7ed192",
          }}
        >
          creative agency
        </Typography>
      </Box>
      <Grid container spacing={10}>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          order={{ sm: 2, xs: 2 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bolder",
              color: "black",
              [theme.breakpoints.down("sm")]: {
                fontSize: 35,
                width: "110%",
                textAlign: "center",
              },
            }}
          >
            <Image
              src="/rocket.png"
              width={70}
              height={70}
              sx={{
                // [theme.breakpoints.down("sm")]: {
                //   width: 250,
                //   height: 340,
                //   position:"absolute",
                //   top:10
                // },
              }}
            />
            Skyrocket your business with our digital marketing solutions.
          </Typography>

          <Typography
            sx={{
              fontWeight: "bolder",
              color: "gray",
              mt: 3,
              [theme.breakpoints.down("sm")]: {
                mb: 4,
                fontSize: 14,
                textAlign: "center",
              },
            }}
          >
            Transform your digital presence and elevate your brand with our
            powerful marketing strategies and expert guidance
          </Typography>
        </Grid>

        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          order={{ sm: 1, xs: 1, lg: 2 }}
          sx={{
            alignSelf: "center",
          }}
        >
          <img
            src="/hero.png"
            style={{
              maxWidth: "100%",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
