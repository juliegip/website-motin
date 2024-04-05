import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Typography, Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import Loading from "@/components/Loading/Loading";
import ReactMarkdown from "react-markdown";
import MotinSTG from "@/assets/motin_stg.jpg";

const RecrutementsDisplay = () => {
  const [recrutements, setRecrutements] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchRecrutement = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND}/api/recrutements?populate=media`);
      setRecrutements(response.data.data);
      setLoading(false);
    } catch (error) {
      setError("Erreur lors du chargement des offres de recrutement");
    }
  };

  useEffect(() => {
    fetchRecrutement();
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", mt: 5 }}>
      {recrutements.length === 0 && (
        <Typography variant="h3" sx={{ marginLeft: "2rem" }}>
          Aucune offre de recrutement pour le moment
        </Typography>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          "@media (max-width:600px)": {
            flexDirection: "column",
          },
        }}
      >
        {recrutements.slice(0, 50).map((recrutement: any, index: number) => (
          <>
            <Box
              key={recrutement.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                marginBottom: "2rem",
                padding: "1rem",
                "@media (min-width:601px)": {
                  flexDirection: "row",
                },
              }}
            >
             {recrutement.attributes.media.data && (
              <img
                src={import.meta.env.VITE_APP_BACKEND + recrutement.attributes.media.data.attributes.url}
                alt="photo de l'offre"
                style={{ width: "50%", height: "auto", padding: "1rem" }}
              />
            )}

            {!recrutement.attributes.media.data && (
              <img
                src={MotinSTG}
                alt="photo de l'offre"
                style={{ width: "50%", height: "auto", padding: "1rem" }}
              />
            )}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "0 1rem",
                  gap: "0.5rem",
                }}
              >
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      textAlign: "justify",
                      flexGrow: 1,
                    }}
                  >
                    {recrutement.attributes.jobTitle} ({recrutement.attributes.contractType})
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "left",
                      my: 2,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <PlaceIcon sx={{ fontSize: "1.5rem" }} />
                    {recrutement.attributes.jobLocation}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "justify",
                      margin: "2rem 0",
                      fontSize: "1.2rem",
                      flexGrow: 1,
                    }}
                  >
                    <ReactMarkdown>{recrutement.attributes.content}</ReactMarkdown>
                  </Typography>
                </Box>
                <Link to={`/recrutement/${recrutement.id}`}>
                  <Button variant="contained" color="secondary">
                    Lire la suite
                  </Button>
                </Link>
              </Box>
            </Box>
            {index !== recrutements.length - 1 && (
              <Divider
                sx={{
                  width: "50%",
                  height: "75px",
                  borderBottomWidth: 2,
                  my: 5,
                }}
              />
            )}
          </>
        ))}
      </Box>
    </Box>
  );
};

export default RecrutementsDisplay;
