import { news } from "@/constants";
import Carousel from "react-material-ui-carousel";
import { NewsCard } from "@/components";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

type Props = {};

const CarouselMUI = (props: Props) => {
  const filteredNews = news.filter((item) => item.landing);
  return (
    <Carousel
      autoPlay={false}
      index={4}
      NextIcon={<ArrowForwardIosIcon />}
      PrevIcon={<ArrowBackIosNewIcon />}
    >
      {filteredNews.map((news, index) => (
        <NewsCard news={news} key={index} />
      ))}
    </Carousel>
  );
};

export default CarouselMUI;
