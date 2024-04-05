import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box } from "@mui/material";
import { useTheme } from "@mui/system";
import { HideOnScroll } from "..";
import { headband_contents } from "@/constants";
import NextArrow from "../Carousel/NextArrow";
import { useMediaQuery } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const HeadBand = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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

  console.log(headbandContents);

  return (
    headbandContents.length > 0 && (
    <HideOnScroll>
      <Box
        position="fixed"
        sx={{
          width: "100%",
          height: isMobile ? 40 : 60,
          top: 0,
          backgroundColor: theme.palette.secondary.main,
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {headbandContents.length > 0 && (
        <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} showArrows={false} showIndicators={false}>
          {headbandContents.map((content, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: isMobile ? 5 : 20,
                  justifyContent: "center",
                  width: "100%",
                  color: "white",
                }}
              >
                {content.attributes.url ? (
                  <a href={content.attributes.url} style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                    {content.attributes.Contenu}
                    <ArrowForwardIosIcon style={{ marginLeft: '10px' }} />
                  </a>
                ) : (
                  content.attributes.Contenu
                )}
              </div>
            </div>
          ))}
        </Carousel>
        )}
      </Box>
    </HideOnScroll>
    )
  );
};

export default HeadBand;
