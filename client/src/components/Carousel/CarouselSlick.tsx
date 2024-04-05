import { NewsCard } from "@/components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Loading from "@/components/Loading/Loading";

import { news } from "@/constants";

import axios from "axios";
import { useEffect, useState } from "react";

const CarouselSlick = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchActus = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND}/api/actus?populate=media`);
      setNews(response.data.data.slice(0, 4));
      setLoading(false);
    } catch (error) {
      setError("Erreur lors du chargement des actualités");
    }
  };

  useEffect(() => {
    fetchActus();
  }, []);

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <ArrowForwardIosIcon color="secondary" />,
    prevArrow: <ArrowBackIosNewIcon color="secondary" />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <ArrowForwardIosIcon />,
          prevArrow: <ArrowBackIosNewIcon />,
        },
      },
    ],
  };

  return (
    <>
      <Loading open={loading} />
      <div className="slider-container">
        <Slider {...settings}>
          {news.map((news) => (
            <NewsCard key={news.id} news={news.attributes} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default CarouselSlick;
