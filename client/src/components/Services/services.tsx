import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Divider,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Motin_Services } from "@/constants";
import content from "@/constants/content.json";

const NotreOffre = () => {
  const theme = useTheme();
  const belowSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [expanded, setExpanded] = useState<string | false>(false);
  const [selectedAccordion, setSelectedAccordion] = useState<string | null>(
    null
  );

  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target as Node)
      ) {
        setExpanded(false);
        setSelectedAccordion(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      event.preventDefault();
      setExpanded(isExpanded ? panel : false);
    };
  const handleClick = (panel: string) => {
    setSelectedAccordion(panel === selectedAccordion ? null : panel);
    // if (expanded === panel) {
    //   setExpanded(false);
    // }
  };

  return (
    <Box component="section" gap={3} id="services" mt={5}>
      <Typography variant="h2" gutterBottom textAlign="center">
        {content.sections.services}
      </Typography>
      <Stack
        direction={belowSM ? "column" : "row"}
        justifyContent="space-around"
        alignItems={belowSM ? "center" : "flex-start"}
        flexGrow={1}
        mt={5}
      >
        {Motin_Services.map((service, index) => (
          <Box
            width={belowSM ? "100%" : "25%"}
            padding={belowSM ? "40px" : "0"}
            sx={{
              backgroundColor:
                belowSM && index % 2 === 0
                  ? theme.palette.primary.lighter
                  : "inherit",
            }}
          >
            <Box key={index} minHeight="30vh" mb={4}>
              <img
                src={service.image}
                alt="service"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <Typography variant="h3" mt={3}>
                {service.offre}
              </Typography>
              <Divider
                sx={{
                  width: "30%",
                  borderBottomWidth: 4,
                  py: "0.5rem",
                  mb: "1rem",
                }}
              />
              {service.contenu.map((item, innerIndex) => (
                <Accordion
                  disableGutters
                  elevation={0}
                  key={innerIndex}
                  expanded={expanded === `${index}-${innerIndex}`}
                  onChange={handleChange(`${index}-${innerIndex}`)}
                  sx={{ width: "100%" }}
                  ref={accordionRef}
                >
                  <AccordionSummary
                    sx={{
                      flexDirection: "row-reverse",
                      justifyContent: "space-between",

                      color:
                        selectedAccordion === `${index}-${innerIndex}`
                          ? "secondary.main"
                          : "inherit",
                    }}
                    onClick={() => handleClick(`${index}-${innerIndex}`)}
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <Typography
                      variant="subtitle1"
                      marginLeft="1rem"
                      sx={{
                        fontWeight:
                          selectedAccordion === `${index}-${innerIndex}`
                            ? 600
                            : "inherit",
                        transition: "font-weight 0.3s",
                      }}
                    >
                      {item.details}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" sx={{ pl: "1.75rem" }}>
                      {item.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default NotreOffre;
