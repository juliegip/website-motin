import { Box, Divider as MuiDivider, Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import {
  Services,
  ScrollTop,
  NewsLanding,
  HeroSlider,
  History,
  MapKeywords,
  Partenaires,
  HeadBand,
  Socials,
  Chatbot,
} from "@/components";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Divider = (props: any) => (
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    style={{ originX: 0.5 }}
  >
    <MuiDivider {...props} />
  </motion.div>
);

const Homepage = () => {
  const heroSliderRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);
  const [isScrolledToHistory, setIsScrolledToHistory] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolledToHistory && heroSliderRef.current) {
        const heroSliderBottom =
          heroSliderRef.current.getBoundingClientRect().bottom;

        if (heroSliderBottom <= window.innerHeight) {
          setIsScrolledToHistory(true);
          historyRef.current?.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    if (!isScrolledToHistory) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolledToHistory]);
  return (
    <>
      <HeadBand />
      <HeroSlider ref={heroSliderRef} />
      <Box component="main" maxWidth={1200} mx="auto">
        <History ref={historyRef} />
        <Divider
          sx={{
            width: "75%",
            borderBottomWidth: 3,
            margin: "auto",
          }}
        />
        <MapKeywords ref={historyRef} />
        <Divider
          sx={{
            width: "75%",
            borderBottomWidth: 3,
            margin: "auto",
          }}
        />
        <Socials />
        <Divider
          sx={{
            width: "75%",
            borderBottomWidth: 3,
            margin: "auto",
          }}
        />
        <Services />
        <Divider
          sx={{
            width: "75%",
            borderBottomWidth: 3,
            margin: "auto",
          }}
        />
        <NewsLanding />
        <Divider
          sx={{
            width: "75%",
            borderBottomWidth: 3,
            margin: "auto",
          }}
        />
      </Box>
      <Partenaires />
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <Chatbot />
    </>
  );
};

export default Homepage;
