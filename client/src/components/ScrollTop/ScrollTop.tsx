import * as React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";

import Fade from "@mui/material/Fade";

interface ScrollTopProps {
  children: React.ReactElement;
}
const ScrollTop = (props: ScrollTopProps) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 40 }}
      >
        {children}
      </Box>
    </Fade>
  );
};

export default ScrollTop;
