import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Button,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { useRouter } from "next/router";
import Sidebar from "./sidebar";

//====================================
function Header() {
  const router = useRouter();
  const theme = useTheme();
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [anchorEl3, setAnchorEl3] = useState(null);

  const handleMenuOpen1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleMenuClose1 = () => {
    setAnchorEl1(null);
  };

  const handleMenuOpen2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleMenuClose2 = () => {
    setAnchorEl2(null);
  };

  const handleMenuOpen3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleMenuClose3 = () => {
    setAnchorEl3(null);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          p: 0,
          [theme.breakpoints.down("sm")]: {
            display: "none",
          },
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: "white",
          }}
        >
          <Image src="/cd.svg" width={100} height={100} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bolder",
              // ml: -2,
              color: "#0e0e0e",
              width: "100%",
            }}
          >
            Digital Sukh
          </Typography>

          <Box sx={{ ml: 1, display: "flex" }}>
            <Typography
              // onClick={handleMenuOpen1}
              sx={{
                ml: 15,
                cursor: "pointer",
                fontWeight: "bolder",

                color: "#8a8a8e",
              }}
            >
              About
            </Typography>

            <Typography
              onMouseEnter={handleMenuOpen1}
              sx={{
                ml: 15,
                cursor: "pointer",
                fontWeight: "bolder",

                color: "#8a8a8e",
              }}
            >
              Development
            </Typography>
            <Menu
              anchorEl={anchorEl1}
              open={Boolean(anchorEl1)}
              onMouseLeave={handleMenuClose1}
              sx={{
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              <Box
                onMouseLeave={handleMenuClose1}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  // backgroundColor: "pink",
                  p: 2,
                  color: "gray",
                  fontWeight: "bolder",
                }}
              >
                <MenuItem
                  sx={{
                    "&:hover": {
                      color: "white",
                      backgroundColor: "royalBlue",
                      borderRadius: 1,
                    },
                  }}
                  onClick={() => {
                    setAnchorEl1(null);
                    router.push("/lohin");
                  }}
                >
                  Web Development
                </MenuItem>
                <MenuItem
                  sx={{
                    "&:hover": {
                      color: "white",
                      backgroundColor: "royalBlue",
                      borderRadius: 1,
                    },
                  }}
                  onClick={handleMenuClose1}
                >
                  Mobile Development
                </MenuItem>
                <MenuItem
                  sx={{
                    "&:hover": {
                      color: "white",
                      backgroundColor: "royalBlue",
                      borderRadius: 1,
                    },
                  }}
                  onClick={handleMenuClose1}
                >
                  API Development
                </MenuItem>
              </Box>
            </Menu>

            <Typography
              onMouseEnter={handleMenuOpen2}
              sx={{
                ml: 10,
                cursor: "pointer",
                color: "#8a8a8e",
                fontWeight: "bolder",
              }}
            >
              Marketing
            </Typography>
            <Menu
              anchorEl={anchorEl2}
              open={Boolean(anchorEl2)}
              onClose={handleMenuClose2}
            >
              <Box
                onMouseLeave={handleMenuClose2}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  color: "gray",
                  fontWeight: "bolder",
                  p: 2,
                }}
              >
                <MenuItem
                  sx={{
                    "&:hover": {
                      color: "white",
                      backgroundColor: "royalBlue",
                      borderRadius: 1,
                    },
                  }}
                  onClick={handleMenuClose2}
                >
                  Digital marketing
                </MenuItem>
                <MenuItem
                  sx={{
                    "&:hover": {
                      color: "white",
                      backgroundColor: "royalBlue",
                      borderRadius: 1,
                    },
                  }}
                  onClick={handleMenuClose2}
                >
                  SEO and SMO marketing
                </MenuItem>
                <MenuItem
                  sx={{
                    "&:hover": {
                      color: "white",
                      backgroundColor: "royalBlue",
                      borderRadius: 1,
                    },
                  }}
                  onClick={handleMenuClose2}
                >
                  Video Marketing
                </MenuItem>
              </Box>
            </Menu>

            <Typography
              onMouseEnter={handleMenuOpen3}
              // onMouseLeave={handleMenuClose3}

              sx={{
                ml: 10,
                cursor: "pointer",
                color: "#8a8a8e",
                fontWeight: "bolder",
              }}
            >
              Resources
            </Typography>
            <Menu
              anchorEl={anchorEl3}
              open={Boolean(anchorEl3)}
              onClose={handleMenuClose3}
              sx={
                {
                  // backgroundColor: "gray",
                }
              }
            >
              <Box
                onMouseLeave={handleMenuClose3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  color: "gray",
                  fontWeight: "bolder",
                  // backgroundColor: "gray",
                  p: 2,
                }}
              >
                <MenuItem
                  sx={{
                    "&:hover": {
                      color: "white",
                      backgroundColor: "royalBlue",
                      borderRadius: 1,
                    },
                  }}
                  onClick={handleMenuClose3}
                >
                  Blogs
                </MenuItem>
                <MenuItem
                  sx={{
                    "&:hover": {
                      color: "white",
                      backgroundColor: "royalBlue",
                      borderRadius: 1,
                    },
                  }}
                  onClick={handleMenuClose3}
                >
                  Portfolio
                </MenuItem>
              </Box>
            </Menu>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
              alignItem: "end",
            }}
          >
            <Button
              sx={{
                backgroundColor: "royalBlue",
                color: "white",
                fontWeight: "bolder",
                p: "10px 30px",
                "&:hover": {
                  backgroundColor: "white",
                  border: "1px solid royalBlue",
                  color: "royalBlue",
                  fontWeight: "bolder",
                },
              }}
            >
              Lets Talk
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Sidebar />
    </>
  );
}

export default Header;
