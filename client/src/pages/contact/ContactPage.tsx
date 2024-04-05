import { Box, Typography, Divider } from "@mui/material";
import ContactForm from "../../components/Contact/contact_form";
import LocationCard from "../../components/Contact/location_cards/Contact/location_card";
import { bases } from "../../constants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import MapComponent from "@/components/mapComponent/MapComponent";
import { useState } from "react";
import BaseList from "@/components/Contact/base_list";

const Contact = () => {
  const [geoData, setGeoData] = useState({
    lat: 49.10477978732956,
    lng: -1.163158136439198,
  });

  const [highlightedBase, setHighlightedBase] = useState(null);
  const [clickedBase, setClickedBase] = useState(null);

  const handleMarkerHover = (index) => {
    setHighlightedBase(index);
  };

  return (
    <Box
      component="main"
      maxWidth={1200}
      mx="auto"
      mt="7rem"
      sx={{
        p: { xs: 4, lg: 0 },
        color: "primary.main",
        minHeight: "calc(100vh - 4rem)",
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        sx={{
          textAlign: "start",
          marginBottom: "1rem",
        }}
      >
        Nous contacter
      </Typography>
      <Box
        display="flex"
        sx={{
          height: "100%",
          gap: "1rem",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        <MapComponent
          geoData={geoData}
          highlightedBase={highlightedBase}
          onMarkerHover={handleMarkerHover}
        />
        <BaseList
          bases={bases}
          highlightedBase={highlightedBase}
          onMarkerHover={handleMarkerHover}
        />
      </Box>

      <Divider
        sx={{
          my: 5,
          borderColor: "secondary.main",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        variant="middle"
      />

      <ContactForm />
    </Box>
  );
};

export default Contact;
