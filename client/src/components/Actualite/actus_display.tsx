import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Typography, Box, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import { newsCategories } from "@/constants";
import BGHero from "@/assets/bg-hero.png";
import Loading from "@/components/Loading/Loading";
import ReactMarkdown from "react-markdown";

const ActusDisplay = () => {
  const [actus, setActus] = useState([]);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    "Toutes les actualités"
  );
  const [loading, setLoading] = useState(true);

  const fetchActus = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND}/api/actus?populate=media`);
      setActus(response.data.data);
      setLoading(false);
    } catch (error) {
      setError("Erreur lors du chargement des actualités");
    }
  };

  useEffect(() => {
    fetchActus();
  }, []);

  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString();
  };

  const filteredActus = selectedCategory === "Toutes les actualités" ? actus : actus.filter(actu => actu.attributes.category === selectedCategory);

  return (
    <>
      <Loading open={loading} />
      <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <Button
            onClick={() => setSelectedCategory("Toutes les actualités")}
            sx={{
              color:
                selectedCategory === "Toutes les actualités"
                  ? "#C41230"
                  : "primary",
            }}
          >
            Toutes les actualités
          </Button>
          {newsCategories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              sx={{
                color: selectedCategory === category ? "#C41230" : "primary",
              }}
            >
              {category}
            </Button>
          ))}
        </Box>
        {error && <Typography variant="h3">{error}</Typography>}
        {filteredActus.length === 0 && (
          <Typography variant="h3" sx={{ marginLeft: "2rem" }}>
            Aucune actualité pour le moment
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
          {filteredActus.slice(0, 50).map((actu: any, index: number) => (
            <Box
              key={actu.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                marginBottom: "2rem",
                padding: "1rem",
                "@media (min-width:601px)": {
                  flexDirection: index === 0 ? "row" : "column",
                  width: index === 0 ? "100%" : "50%",
                },
              }}
            >
              {actu.attributes.media.data.attributes.url ? (
                <img
                  src={import.meta.env.VITE_APP_BACKEND + actu.attributes.media.data.attributes.url}
                  alt="photo actualité"
                  style={{ width: "65%", height: "auto", padding: "1rem" }}
                />
              ) : (
                <img
                  src={BGHero}
                  alt="photo actualité"
                  style={{ width: "65%", height: "auto", padding: "1rem" }}
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
                <Typography variant="h5">{formatDate(actu.attributes.date)}</Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      textAlign: "justify",
                      flexGrow: 1,
                    }}
                  >
                    {actu.attributes.title}
                  </Typography>
                  <Chip
                    label={actu.attributes.category}
                    variant="filled"
                    color="secondary"
                    sx={{ my: "1rem" }}
                  />

                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "justify",
                      margin: "2rem 0",
                      fontSize: "1.2rem",
                      flexGrow: 1,
                    }}
                  >
                    <ReactMarkdown disallowedElements={['img']}>
                      {actu.attributes.content.substring(0, 300) + "..."}
                    </ReactMarkdown>
                  </Typography>
                </Box>
                <Link to={`/actualites/${actu.id}`}>
                  <Button variant="contained" color="secondary">
                    Lire la suite
                  </Button>
                </Link>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ActusDisplay;
