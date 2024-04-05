import { Box, Button, Select, TextField, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Alert } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { recrutement_images } from "@/constants";
import Loading from "@/components/Loading/Loading";
import { contractTypes } from "@/constants";
import { bases } from "@/constants";

const RecrutementEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recrutementData, setRecrutementData] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "",
  });

  const fetchRecrutement = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3030/api/recrutement/${id}`
      );
      setRecrutementData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recrutement:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchRecrutement();
    } else {
      setLoading(false);
    }
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreviewImage("http://localhost:5173/" + e.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecrutementData({
      ...recrutementData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      jobTitle: recrutementData?.jobTitle,
      content: recrutementData?.content,
      jobLocation: recrutementData?.jobLocation,
      contractType: recrutementData?.contractType,
      contact: recrutementData?.contact,
      media: recrutementData?.media,
    };

    if (
      data.content == null ||
      data.jobTitle == null ||
      data.jobLocation == null ||
      data.contractType == null ||
      data.contact == null ||
      data.media == null
    ) {
      setAlert({
        open: true,
        message: "Veuillez remplir tous les champs",
        severity: "error",
      });
      return;
    }

    try {
      if (id) {
        // Si un ID est présent, mettez à jour l'actualité existante
        await axios.post(`http://localhost:3030/api/recrutement/${id}`, data);
        setAlert({
          open: true,
          message: "Recrutement modifié avec succès",
          severity: "success",
        });
      } else {
        // Sinon, créez une nouvelle actualité
        await axios.post(`http://localhost:3030/api/recrutement`, data);
        setAlert({
          open: true,
          message: "Recrutement créé avec succès",
          severity: "success",
        });
      }
      navigate("/admin");
    } catch (error) {
      setAlert({
        open: true,
        message: "Erreur lors de la modification",
        severity: "error",
      });
    }
  };

  return (
    <>
      <Loading open={loading} />
      <Box
        component="main"
        sx={{
          p: 3,
          color: "primary.main",
          minHeight: "calc(100vh - 4rem)",
          marginTop: "4rem",
        }}
      >
        <Button
          href="/admin/"
          variant="contained"
          color="primary"
          sx={{ marginBottom: "1rem" }}
        >
          Retour
        </Button>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", margin: "0.5rem 0" }}
        >
          {id ? "Modifier" : "Créer"} une offre de recrutement
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id="jobTitle"
            label="Titre"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={recrutementData?.jobTitle}
            onChange={handleInputChange}
          />
          <Select
            native
            id="contractType"
            label="Type de contrat"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={recrutementData?.contractType}
            onChange={handleInputChange}
            sx={{ marginBottom: "1rem" }}
          >
            <option value="" disabled selected>
              Sélectionner un type de contrat
            </option>
            {contractTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
          <Select
            native
            id="jobLocation"
            label="Localisation"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={recrutementData?.jobLocation}
            onChange={handleInputChange}
            sx={{ marginBottom: "1rem" }}
          >
            <option value="" disabled selected>
              Sélectionner une localisation
            </option>
            {bases.map((base) => (
              <option key={base.nom} value={base.nom + " - " + base.adresse}>
                {base.nom} - {base.adresse}
              </option>
            ))}
          </Select>
          <ReactQuill
            theme="snow"
            placeholder="Contenu de l'offre de recrutement"
            value={recrutementData?.content}
            onChange={(value) =>
              setRecrutementData({ ...recrutementData, content: value })
            }
            style={{ height: "fit-content", marginBottom: "1rem" }}
            modules={{
              toolbar: [
                [{ header: "1" }, { header: "2" }, { font: [] }],
                [{ size: [] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [
                  { list: "ordered" },
                  { list: "bullet" },
                  { indent: "-1" },
                  { indent: "+1" },
                ],
                ["clean"],
              ],
            }}
          />

          <TextField
            id="contact"
            label="Personne à contacter"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={recrutementData?.contact}
            onChange={handleInputChange}
          />

          <Select
            native
            id="media"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(event) => {
              handleImageChange(event);
              setRecrutementData({
                ...recrutementData,
                media: event.target.value,
              });
            }}
            defaultValue=""
            sx={{ marginBottom: "1rem" }}
          >
            <option value="" disabled>
              Sélectionner une image
            </option>
            {recrutement_images.map((image) => (
              <option key={image.alt} value={image.src}>
                {image.alt}
              </option>
            ))}
          </Select>

          {previewImage ? (
            <img
              src={previewImage}
              alt="Preview"
              style={{ width: "500px", height: "auto" }}
            />
          ) : (
            recrutementData?.media && (
              <img
                src={"http://localhost:5173/" + recrutementData?.media}
                alt="media"
                style={{ width: "500px", height: "auto" }}
              />
            )
          )}

          <Box>
            <Button variant="contained" type="submit">
              Publier
            </Button>
          </Box>
          {alert.open && (
            <Alert
              severity={alert.severity}
              onClose={() => setAlert({ ...alert, open: false })}
            >
              {alert.message}
            </Alert>
          )}
        </form>
      </Box>
    </>
  );
};

export default RecrutementEdit;
