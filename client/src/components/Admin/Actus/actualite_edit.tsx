import { Box, Button, Select, TextField, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Alert } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { newsCategories } from "@/constants";
import Loading from "@/components/Loading/Loading";

const ActualiteEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [actuData, setActuData] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "",
  });

  const fetchActu = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3030/api/actualites/${id}`
      );
      setActuData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching actuality:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchActu();
    } else {
      setLoading(false);
    }
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActuData({
      ...actuData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget;
    const title = form.elements.namedItem("title")?.value;
    const category = form.elements.namedItem("category")?.value;
    const media = form.elements.namedItem("media")?.files[0];

    console.log(media);

    const data = {
      title: title,
      category: category,
      content: actuData?.content,
    };

    if (data.content == null || data.title == null) {
      setAlert({
        open: true,
        message: "Veuillez remplir tous les champs",
        severity: "error",
      });
      return;
    }

    try {
      if (media) {
        const formData = new FormData();
        formData.append("media", media);
        const response = await axios.post(
          `http://localhost:3030/api/uploads`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        data.media = response.data.filePath;
      }

      if (id) {
        // Si un ID est présent, mettez à jour l'actualité existante
        await axios.post(
          `http://localhost:3030/api/actualites/add/${id}`,
          data
        );
        setAlert({
          open: true,
          message: "Actualité modifiée avec succès",
          severity: "success",
        });
      } else {
        // Sinon, créez une nouvelle actualité
        await axios.post(`http://localhost:3030/api/actualites/add`, data);
        setAlert({
          open: true,
          message: "Actualité créée avec succès",
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
        sx={{ p: 3, color: "primary.main", minHeight: "calc(100vh - 4rem)" }}
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
          {id ? "Modifier" : "Créer"} une actualité
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id="title"
            label="Titre"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={actuData?.title}
            onChange={handleInputChange}
          />
          <Select
            native
            id="category"
            label="Catégorie"
            variant="outlined"
            fullWidth
            required
            value={actuData?.category}
            onChange={handleInputChange}
            sx={{ marginBottom: "1rem" }}
          >
            <option value="" disabled selected>
              Choisir une catégorie
            </option>
            {newsCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>

          <ReactQuill
            theme="snow"
            value={actuData?.content}
            onChange={(value) => setActuData({ ...actuData, content: value })}
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
            id="media"
            label="Média"
            variant="outlined"
            fullWidth
            margin="normal"
            type="file"
            onChange={handleImageChange}
          />

          {previewImage ? (
            <img
              src={previewImage}
              alt="Preview"
              style={{ width: "500px", height: "auto" }}
            />
          ) : (
            actuData?.media && (
              <img
                src={"http://localhost:5173/" + actuData?.media}
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

export default ActualiteEdit;
