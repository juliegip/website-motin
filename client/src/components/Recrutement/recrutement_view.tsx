import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import PlaceIcon from "@mui/icons-material/Place";
import ShareIcon from "@mui/icons-material/Share";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import Loading from "@/components/Loading/Loading";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ReactMarkdown from "react-markdown";
import MotinSTG from "@/assets/motin_stg.jpg";

const RecrutementView = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();
  const [recrutement, setRecrutement] = useState<any>();

  useEffect(() => {
    const fetchRecrutement = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND}/api/recrutements/${id}?populate=media`);
        setRecrutement(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log("Erreur lors du chargement de l'offre de recrutement");
      }
    };
    fetchRecrutement();
  }, [id]);

  if (!recrutement) {
    return <CircularProgress color="secondary" />;
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: recrutement.attributes.jobTitle,
          text: "Regardez cette offre de recrutement !",
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
          sx={{ alignSelf: "flex-start", mt: "5rem", ml: "2rem" }}
        >
          Retour
        </Button>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 3,
              width: "70%",
            }}
          >
            <Typography variant="h1" sx={{ textAlign: "left", ml: 2, mb: 2 }}>
              {recrutement.attributesjobTitle}
            </Typography>

            {recrutement.attributes.media.data && (
                <img
                    src={`${import.meta.env.VITE_APP_BACKEND}${recrutement.attributes.media.data.attributes.url}`}
                    alt="photo actualité"
                    style={{ width: "100%", height: "auto", padding: "1rem" }}
                />
            )}

            {!recrutement.attributes.media.data && (
                <img
                    src={MotinSTG}
                    alt="photo actualité"
                    style={{ width: "100%", height: "auto", padding: "1rem" }}
                />
            )}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                ml: 2,
                border: "1px solid lightgray",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "lightgray",
                  padding: "1rem",
                  display: "flex",
                  alignItems: "center",
                  width: "150px",
                }}
              >
                <AssignmentIcon sx={{ fontSize: "1.5rem" }} />
                <Typography variant="body1" sx={{ textAlign: "left" }}>
                  Contrat
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{ textAlign: "left", mb: 1, ml: 2 }}
              >
                {recrutement.attributes.contractType}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                ml: 2,
                border: "1px solid lightgray",
                borderTop: "none",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "lightgray",
                  padding: "1rem",
                  display: "flex",
                  alignItems: "center",
                  width: "150px",
                }}
              >
                <PlaceIcon sx={{ fontSize: "1.5rem" }} />
                <Typography variant="body1" sx={{ textAlign: "left" }}>
                  Lieu
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{ textAlign: "left", mb: 1, ml: 2 }}
              >
                {recrutement.attributes.jobLocation}
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{ textAlign: "justify", ml: 2 }}
            >
              <ReactMarkdown>{recrutement.attributes.content}</ReactMarkdown>
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 3,
              width: "30%",
            }}
          >
            <Typography variant="h3" sx={{ textAlign: "left", mb: 2 }}>
              Contact
            </Typography>

            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <ContactPhoneIcon sx={{ fontSize: "1.5rem", color: "#C41230" }} />
              <Typography variant="body1" sx={{ display: "inline", ml: 1 }}>
              Personne à contacter : {recrutement.attributes.contact}
              </Typography>
            </Typography>
          </Box>
        </Box>

        <Button
          variant="contained"
          startIcon={<ShareIcon />}
          onClick={handleShare}
          sx={{ ml: "2rem", mb: "2rem", alignSelf: "center" }}
        >
          Partager
        </Button>
      </Box>
    </>
  );
};

export default RecrutementView;
