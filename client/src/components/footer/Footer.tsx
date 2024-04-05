import {
  Box,
  Divider,
  Grid,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { socialMedia, footerLinks } from "@/constants";
import content from "@/constants/content.json";
import MFLogo from "@/assets/MF.svg";

const Footer = () => {
  const theme = useTheme();
  const belowSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      component="footer"
      sx={{
        width: "100vw",

        backgroundColor: "#181818",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        gap={4}
        py="6rem"
        px="4rem"
        sx={{
          justifyContent: "space-around",
          flexDirection: belowSM ? "column" : "row",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={4}
          color="primary.lighter"
          flexGrow={1}
        >
          <Link
            href="/"
            variant="h1"
            sx={{ textDecoration: "none", color: "#fff" }}
          >
            MOTIN
          </Link>
          <IconButton
            size="large"
            edge="start"
            aria-label="logo"
            color="primary"
            href="/"
          >
            <img src={MFLogo} alt="logo" width="100" height="auto" />
          </IconButton>
          <Typography variant="h6" textAlign="center">
            {content.slogan}
          </Typography>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          flexGrow={1}
        >
          <Typography variant="h6" textAlign="center" color="primary.lighter">
            Suivez-nous sur les réseaux
          </Typography>
          <Box display="flex" justifyContent="center" gap={2}>
            {socialMedia.map((icon, index) => (
              <IconButton
                key={index}
                href={icon.src}
                target="_blank"
                sx={{
                  color: "primary.lighter",
                  "& img": {
                    color: "inherit",
                  },
                }}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                  style={{ color: "inherit" }}
                />
              </IconButton>
            ))}
          </Box>
        </Box>
        <Box flexGrow={1}>
          {footerLinks.map((section) => (
            <Grid container>
              <Grid item xs={4}>
                <ul style={{ listStyle: "none" }}>
                  {section.links.slice(0, 3).map((link, index) => (
                    <li key={index}>
                      <Link href={link.link} variant="body2" underline="hover">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
              <Grid item xs={8}>
                <ul style={{ listStyle: "none" }}>
                  {section.links.slice(3).map((link, index) => (
                    <li
                      key={index}
                      style={{ color: "#eff0f0", fontWeight: 400 }}
                    >
                      <Link href={link.link} variant="body2" underline="hover">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Box>
      <Divider sx={{ borderColor: "primary.lighter", margin: "12px 0" }} />
      <Box
        display="flex"
        justifyContent="center"
        gap="10px"
        alignItems="center"
        pb="12px"
      >
        <Typography sx={{ color: "primary.lighter", fontSize: "0.7rem" }}>
          &#169;MOTIN
        </Typography>
        <Link
          href="/"
          underline="none"
          sx={{
            fontSize: "0.7rem",
            fontFamily: "Roboto",
            "&:hover": {
              color: "#fff",
            },
          }}
        >
          MENTIONS LEGALES
        </Link>
        <Link
          href="/"
          underline="none"
          sx={{
            fontSize: "0.7rem",
            fontFamily: "Roboto",
            "&:hover": {
              color: "#fff",
            },
          }}
        >
          POLITIQUE DE CONFIDENTIALITE
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
