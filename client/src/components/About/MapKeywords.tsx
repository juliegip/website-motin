import { forwardRef } from "react";
import { Box, Typography } from "@mui/material";
import MapImg from "@/assets/basesMap.png";
import content from "@/constants/content.json";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const MapKeywords = forwardRef<HTMLDivElement>((props, ref) => {
  const Keyword = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    "&::before": {
      content: '"• "',
      color: theme.palette.secondary.main,
    },
  }));

  const listKeyword = content.homepage.chiffres_cles;

  //Animations :
  const imgVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Box component="section" p={5} id="mapkeywords" ref={ref}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            pr: { xs: 0, md: 5 },
          }}
        >
          <motion.div
            variants={imgVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <img src={MapImg} alt="map" style={{ width: "100%" }} />
          </motion.div>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            pt: { xs: 5, md: 0 },
            textAlign: "justify",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ textAlign: { xs: "center", sm: "left" } }}
          >
            {content.homepage.mapkeyword_title}
          </Typography>

          {listKeyword.map((keyword, index) => (
            <Keyword
              variant="h5"
              gutterBottom
              key={index}
              sx={{
                color: "text.primary",
                py: 4,
              }}
            >
              {keyword}
            </Keyword>
          ))}
        </Box>
      </Box>
    </Box>
  );
});

export default MapKeywords;
