import { Typography } from "@mui/material";
import PartenairesCarousel from "./PartenairesCarousel";
import content from "@/constants/content.json";

const Partenaires = () => {
  return (
    <>
      <Typography
        variant="h2"
        gutterBottom
        sx={{ mt: 5 }}
        id="partenaires"
        textAlign="center"
      >
        {content.sections.partenaires}
      </Typography>

      <PartenairesCarousel />
    </>
  );
};

export default Partenaires;
