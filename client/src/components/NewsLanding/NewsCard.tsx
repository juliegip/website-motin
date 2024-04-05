import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import BGHero from "@/assets/bg-hero.png";
import { NewsCardProps } from "@/types";
import { Button, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import { ResponsiveButton } from "..";
import ReactMarkdown from "react-markdown";

const NewsCard = ({ news }: NewsCardProps) => {
  console.log(news);
  const {category, title, content, date } = news;
  const media = news.media ? news.media.data.attributes.url : "";
  // let mediaURL = media ? media.replace(/\\/g, "/") : "";
  // if (media) {
  //   mediaURL = media.replace(/\\/g, "/");
  // }

  // const truncatedContent = content
  //   .split(" ")
  //   .slice(0, 20)
  //   .join(" ")
  //   .replace(/<\/?[^>]+(>|$)/g, "");
  // const truncatedContentWithEllipsis = truncatedContent + "...";

  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card sx={{ height: "100%" }}>
      {media ? (
        <CardMedia sx={{ height: 140 }} image={import.meta.env.VITE_APP_BACKEND + media} />
      ) : (
        <CardMedia sx={{ height: 140 }} image={BGHero} />
      )}
      <CardContent sx={{ height: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Chip
          label={category}
          variant="filled"
          color="secondary"
          sx={{ my: "0.5rem" }}
        />
        <Typography variant="body2" color="text.secondary">
          <ReactMarkdown disallowedElements={["img"]}>
            {content.substring(0, 300) + "..."}
          </ReactMarkdown>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {formatDate(date)}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Link to={`/actualites/`}>
          <ResponsiveButton type="button" variant="contained" color="secondary">
            En savoir plus
          </ResponsiveButton>
        </Link>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
