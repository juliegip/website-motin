import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ShareIcon from "@mui/icons-material/Share";
import Loading from "@/components/Loading/Loading";
import ReactMarkdown from 'react-markdown';

const ActusView = () => {
  const { id } = useParams<{ id: string }>();
  const [actu, setActu] = useState(null);
  const [loading, setLoading] = useState(true);

  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString();
  };

  useEffect(() => {
    const fetchActu = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND}/api/actus/${id}?populate=media`);
        setActu(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log("Erreur lors du chargement de l'actualité");
      }
    };
    fetchActu();
  }, [id]);

  if (!actu) {
    return <CircularProgress color="secondary" />;
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: actu.attributes.title,
          text: "Regardez cette actualité !",
          url: window.location.href,
        })
        .catch((error) => console.log("Erreur de partage", error));
    } else {
      alert("Votre navigateur ne supporte pas la fonction de partage");
    }
  };

  return (
    <>
      <Loading open={loading} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "4rem",
        }}
      >
        <Button
          variant="contained"
          startIcon={<KeyboardBackspaceIcon />}
          onClick={() => window.history.back()}
          sx={{ margin: "1rem 4rem", alignSelf: "flex-start" }}
        >
          Retour
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 3,
            width: "70vw",
          }}
        >
          <Typography variant="h1" sx={{ textAlign: "justify" }}>
              {actu.attributes.title}
          </Typography>

          <Typography variant="body1" sx={{ textAlign: "left", my: 2 }}>
              {formatDate(actu.attributes.date)}
          </Typography>

          {actu.attributes.media.data.attributes.url && (
              <img
                  src={`${import.meta.env.VITE_APP_BACKEND}${actu.attributes.media.data.attributes.url}`}
                  alt="photo actualité"
                  style={{ width: "100%", height: "auto", padding: "1rem" }}
              />
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            my: 5,
            p: 3,
            width: "70vw",
          }}
        >
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
              <ReactMarkdown>{actu.attributes.content}</ReactMarkdown>
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<ShareIcon />}
          onClick={handleShare}
          sx={{ margin: "1rem 4rem", alignSelf: "center" }}
        >
          Partager
        </Button>
      </Box>
    </>
  );
};

export default ActusView;
