import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { LocationCardProps } from "@/types";

const LocationCard = ({
  locationName,
  locationAdress,
  locationPhone,
  locationImage,
  GMapsURL,
  mail,
}: LocationCardProps) => {
  return (
    <Card
      sx={{
        width: 300,
        minHeight: 350,
        height: "fit-content",
        margin: "auto",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={locationImage}
        alt="photo concession"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {locationName} hello
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {locationAdress}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <PhoneIcon sx={{ fontSize: 16 }} /> {locationPhone}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button size="small" href={GMapsURL} target="_blank">
          Itinéraire
        </Button>
        <Button size="small" href={`mailto:${mail}`} target="_blank">
          <MailIcon sx={{ fontSize: 16 }} />
        </Button>
      </CardActions>
    </Card>
  );
};


