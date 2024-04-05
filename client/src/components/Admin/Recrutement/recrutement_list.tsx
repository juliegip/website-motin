import axios from "axios";
import { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { RecrutementListProps } from "@/types";
import Loading from "@/components/Loading/Loading";

const RecrutementList = ({
  recrutements,
  onRecrutementDeleted,
}: RecrutementListProps) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3030/api/recrutement/${id}`);
      onRecrutementDeleted();
    } catch (error) {
      setError(
        "Erreur lors de la suppression de l'offre de recrutement : " + error
      );
    }
  };

  return (
    <>
      <Loading open={loading} />
      <div>
        <Typography variant="h3" align="center" gutterBottom>
          Liste des offres de recrutement
        </Typography>
        <Grid container spacing={3} style={{ marginBottom: "1rem" }}>
          {recrutements.map((recrutement) => (
            <Grid item key={recrutement._id} xs={12} sm={6} md={4}>
              <Card
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {recrutement.jobTitle}
                  </Typography>
                  <img
                    src={"http://localhost:5173/" + recrutement.media}
                    alt="photo recrutement"
                    style={{ width: "100%", marginBottom: "1rem" }}
                  />
                  <Typography color="textSecondary" gutterBottom>
                    Type de contrat : {recrutement.contractType}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    Lieu : {recrutement.jobLocation}
                  </Typography>
                  <Typography variant="body2" component="div">
                    <div
                      style={{ maxHeight: "200px", overflow: "auto" }}
                      dangerouslySetInnerHTML={{ __html: recrutement.content }}
                    />
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    Personne à contacter : {recrutement.contact}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    href={`/admin/recrutement/${recrutement._id}`}
                  >
                    <EditIcon /> Modifier
                  </Button>
                  <Button
                    size="small"
                    onClick={() => handleDelete(recrutement._id)}
                  >
                    <DeleteIcon /> Supprimer
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        {error && <Typography color="error">{error}</Typography>}
      </div>
    </>
  );
};

export default RecrutementList;
