import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

const Hero = () => {
  const theme = useTheme();
  const belowMD = useMediaQuery(theme.breakpoints.down("md"));
  const belowSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      component="section"
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundImage: 'url("src/assets/bg-hero.png")',
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        margin: "0",
      }}
    >
      <Box
        component="div"
        sx={{
          position: "absolute",
          height: "100%",
          width: "100%",
          top: "0",
          left: "0",
          background:
            "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0))",
          color: "white",
          alignItems: belowMD ? "center" : "start",
        }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            padding: { xs: "4rem", md: "6rem" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: belowMD ? "center" : "left",
              fontSize: belowSM ? "2rem" : "3rem",
              color: "white.main",
            }}
          >
            Votre concession Massey Fergusson en Normandie
          </Typography>
          <Typography
            variant="body1"
            mt={4}
            sx={{
              textAlign: belowMD ? "center" : "left",
            }}
          >
            Nous sommes à l'écoute et au service d'une agriculture intelligente
          </Typography>
          <Box
            display="flex"
            gap={3}
            mt={5}
            sx={{ justifyContent: belowMD ? "center" : "flex-start" }}
          >
            <Button
              component={Link}
              to="/occasions"
              variant="contained"
              color="secondary"
            >
              Nos occasions
            </Button>

            <Button component={Link} to="/actualites" variant="contained">
              Notre actualité
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
