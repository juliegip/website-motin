import {
  AppBar,
  Box,
  Dialog,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  Link,
} from "@mui/material";
import { useState } from "react";
import MFLogo from "@/assets/MF.svg";
import { HideOnScroll } from "@/components";
import { Close, Menu } from "@mui/icons-material";
import MenuNav from "./MenuNav";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import axios from "axios";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const onOpenHandler = () => setOpen(true);
  const onCloseHandler = () => setOpen(false);

  const [topPosition, setTopPosition] = useState(0);
  const [headbandContents, setHeadbandContents] = useState([]);

  useEffect(() => {
    const fetchHeadbandContents = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND}/api/bandeaus`);
        const today = new Date();
        const filteredData = response.data.data.filter((item) => {
          const debutAffichage = new Date(item.attributes.Debut_affichage);
          const finAffichage = new Date(item.attributes.Fin_affichage);
          return debutAffichage <= today && today <= finAffichage;
        });
        setHeadbandContents(filteredData);
      } catch (error) {
        console.error("Erreur lors du chargement des actualités");
      }
    };

    fetchHeadbandContents();
  }, []);

  const location = useLocation();
  const isHome = location.pathname === "/";
  const isMobile = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    if (headbandContents.length > 0) {
      if (isHome) {
        if (isMobile) {
          setTopPosition(40);
        } else {
          setTopPosition(60);
        }
      } else {
        setTopPosition(0);
      }
    } else {
      setTopPosition(0);
    }
  }, [isHome, isMobile, headbandContents]);

  return (
    <header>
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            top: topPosition,
            height: "4rem",
            backgroundColor: "neutral.dark",
          }}
        >
          <Toolbar>
            <Box display="flex" flexGrow={1} alignItems="center" py={2}>
              <IconButton
                size="large"
                edge="start"
                aria-label="logo"
                color="primary"
                href="/"
              >
                <img src={MFLogo} alt="logo" width="100" height="auto" />
              </IconButton>
              <Link
                href="/"
                variant="h1"
                sx={{ textDecoration: "none", color: "#fff" }}
              >
                MOTIN
              </Link>
            </Box>
            <Hidden mdDown smDown>
              <MenuNav flexDir="row" />
            </Hidden>
            <Hidden mdUp smUp>
              <IconButton onClick={onOpenHandler} color="white" size="large">
                <Menu />
              </IconButton>
              <Dialog
                open={open}
                fullScreen
                fullWidth
                sx={{
                  ".MuiDialog-paper": {
                    backgroundColor: "neutral.dark",
                    color: "white",
                    margin: 0,
                    width: "100%",
                    height: "100%",
                  },
                }}
              >
                <AppBar
                  position="static"
                  sx={{ backgroundColor: "neutral.dark" }}
                >
                  <Toolbar>
                    <Typography
                      variant="h3"
                      sx={{ flexGrow: 1, textAlign: "center", color: "#fff" }}
                    >
                      Menu
                    </Typography>
                    <IconButton onClick={onCloseHandler} color="white">
                      <Close />
                    </IconButton>
                  </Toolbar>
                </AppBar>
                <Toolbar />
                <MenuNav flexDir="column" onClose={onCloseHandler} />
              </Dialog>
            </Hidden>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </header>
  );
};

export default Navbar;
