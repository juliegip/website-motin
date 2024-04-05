import { Button, IconButton } from "@mui/material";
import { CustomArrowProps } from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const PrevArrow = ({
  currentSlide,
  slideCount,
  ...props
}: CustomArrowProps) => {
  return (
    <Button {...props} className={"slick-prev slick-arrow"} type="button">
      <ArrowBackIosNewIcon />
    </Button>
  );
};

export default PrevArrow;
