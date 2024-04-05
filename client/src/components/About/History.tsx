import { Box, Typography } from "@mui/material";
import content from "@/constants/content.json";
import AboutImg from "@/assets/about-img.jpg";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const History = forwardRef<HTMLDivElement>((props, ref) => {
  const slideFromUp = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Box
      ref={ref}
      component="section"
      p={5}
      id="history"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        variants={slideFromUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{ width: "100%", textAlign: "center" }}
        >
          {content.about.title}
        </Typography>
        <Typography variant="h4" gutterBottom textAlign="center">
          {content.about.subtitle}
        </Typography>
      </motion.div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={4}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 3, md: 6 },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            textAlign: { xs: "center", sm: "justify" },
          }}
        >
          <motion.div
            variants={slideFromUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Typography variant="body1" gutterBottom lineHeight="2">
              Bienvenue chez{" "}
              <span style={{ color: "#c41230", fontWeight: "600" }}>MOTIN</span>
              , votre
              <strong> partenaire de confiance </strong>en machinerie agricole
              depuis 1905. Fort d'une tradition d'excellence en Normandie et en
              Bretagne nous nous engageons à vous offrir des produits et service
              de qualité. <br></br>
              En tant que concessionnaire officiel
              <strong style={{ backgroundColor: "#c41230", color: "#fff" }}>
                {" "}
                Massey Ferguson{" "}
              </strong>
              , nous sommes fiers de représenter une marque emblématique dans le
              domaine des tracteurs. Notre catalogue s'étend également à une
              large gamme de matériel de fenaison, d'outils de travail du sol,
              et d'équipements pour l'élevage, grâce à notre partenariat avec
              des marques de renommée telle que{" "}
              <em>Kverneland, Pottinger, SMA, Joskin, Faresin, et Bélair</em>.
              <br></br>
              Chez{" "}
              <span style={{ color: "#c41230", fontWeight: "600" }}>MOTIN</span>
              , nous nous engageons à vous fournir non seulement l'équipement,
              mais aussi le savoir-faire et le support nécessaires pour
              propulser votre exploitation agricole vers l'avenir.
            </Typography>
          </motion.div>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            pt: { xs: 5, md: 0 },
          }}
        >
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img src={AboutImg} alt="about us" style={{ width: "100%" }} />
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
});

export default History;
