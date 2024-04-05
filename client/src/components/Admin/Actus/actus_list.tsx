import axios from "axios";
import { useState } from "react";
import { Typography, Card, CardContent, CardActions, Button, Grid } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ActusListProps } from "@/types";
import BGHero from "../../../assets/bg-hero.png";

const ActusList = ({ actus, onActuDeleted }: ActusListProps) => {
    const [error, setError] = useState("");

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3030/api/actualites/delete/${id}`);
            onActuDeleted();
        } catch (error) {
            setError("Erreur lors de la suppression de l'actualité");
        }
    };

    return (
        <div>
            <Typography variant="h3" align="center" gutterBottom>
                Liste des actualités
            </Typography>
            <Grid container spacing={3} style={{ marginBottom: '1rem' }}>
                {actus.map((actu) => (
                    <Grid item key={actu._id} xs={12} sm={6} md={4}>
                        <Card minWidth={275} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <CardContent>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    {actu.title}
                                </Typography>
                                {actu.media ? (
                                    <img src={`http://localhost:5173/${actu.media}`} alt="photo actualité" style={{ width: '100%', marginBottom: '1rem' }} />
                                ) : (
                                    <img src={BGHero} alt="photo actualité" style={{ width: '100%', marginBottom: '1rem' }} />
                                )}
                                <Typography color="textSecondary" gutterBottom>
                                    Catégorie: {actu.category}
                                </Typography>
                                <Typography variant="body2" component="div">
                                    <div 
                                    style={{ height: '200px', overflow: 'auto' }}
                                    dangerouslySetInnerHTML={{ __html: actu.content }} />
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" href={`/admin/actus/${actu._id}`}>
                                    <EditIcon /> Modifier
                                </Button>
                                <Button size="small" onClick={() => handleDelete(actu._id)}>
                                    <DeleteIcon /> Supprimer
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {error && <Typography color="error">{error}</Typography>}
        </div>
    );
};

export default ActusList;
