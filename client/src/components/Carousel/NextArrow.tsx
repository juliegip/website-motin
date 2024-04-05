import { Button, IconButton } from "@mui/material";
import { CustomArrowProps } from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const NextArrow = ({
  currentSlide,
  slideCount,
  ...props
}: CustomArrowProps) => {
  return <ArrowForwardIosIcon />;
};

export default NextArrow;
