import { partenaires } from "@/constants";
import { Link } from "react-router-dom";
import Marquee from "react-marquee-slider";
import { Box } from "@mui/material";
import "./PartenairesCarousel.css";

const PartenairesCarousel = () => {
  return (
    <Box
      sx={{ width: "100%", height: "10%", backgroundColor: "primary.lighter" }}
    >
      <Marquee velocity={20}>
        {partenaires.map((partenaire, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "250px",
              height: "100%",
              margin: "0 1rem",
            }}
          >
            <Link
              to={partenaire.link}
              target={partenaire.target}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <img
                src={partenaire.logo}
                alt={partenaire.name}
                style={{
                  width: "80%",
                  height: "auto",
                  margin: "0",
                  alignSelf: "center",
                }}
              />
            </Link>
          </Box>
        ))}
      </Marquee>
    </Box>
  );
};

export default PartenairesCarousel;
