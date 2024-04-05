import { useEffect } from "react";
import { socialMedia } from "@/constants";
import { Box, Link, Typography, useTheme, useMediaQuery } from "@mui/material";
import { motion, useAnimation } from "framer-motion";

export const Socials = () => {
  const theme = useTheme();
  const belowSM = useMediaQuery(theme.breakpoints.down("sm"));
  const controls = useAnimation();

  useEffect(() => {
    if (belowSM) {
      controls.start({
        scale: [0.5, 1, 1],
        opacity: [0.5, 1, 1],
        transition: {
          duration: 2,
          ease: "easeInOut",
        },
      });
    } else {
      controls.start({
        scale: [0.5, 1, 1],
        opacity: [0.5, 1, 1],
        transition: {
          duration: 2,
          ease: "easeInOut",
        },
      });
    }
  }, [belowSM, controls]);

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    show: {
      y: [0, -20, 0],
      opacity: [1, 0.8, 1],
      transition: {
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
        opacity: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        },
      },
    },
  };

  return (
    <>
      <motion.div initial={{ scale: 1 }} animate={controls}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%" }}
          my={5}
        >
          <Box
            display="flex"
            flexDirection="column"
            sx={{
              width: { xs: "100%", sm: "70%", lg: "100%" },
              borderRadius: { sm: "16px" },
              height: "250px",

              backgroundColor: "primary.lighter",
            }}
          >
            <Typography
              variant="h4"
              align="center"
              sx={{ color: "secondary.main", mt: 5, fontWeight: "bold" }}
            >
              Suivez-nous sur les réseaux
            </Typography>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              {socialMedia.map((social, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      margin: "0 10px",
                    }}
                  >
                    <img
                      src={social.src}
                      alt={social.alt}
                      style={{
                        width: belowSM ? "50px" : "75px",
                        height: belowSM ? "50px" : "75px",
                      }}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

export default Socials;
