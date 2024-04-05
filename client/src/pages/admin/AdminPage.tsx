import {
  Box,
  Button,
  TextField,
  Typography,
  Tabs,
  Tab,
  Toolbar,
  Grid,
} from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../AuthContext";
import axios from "axios";
import ActusTabs from "@/components/Admin/Actus/actus_tabs";
import RecrutementTabs from "@/components/Admin/Recrutement/recrutement_tabs";

const Admin = (props: Props) => {
  const { token, login, logout } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [refreshActus, setRefreshActus] = useState(false);
  const [actus, setActus] = useState([]);
  const [recrutements, setRecrutements] = useState([]);
  const [refreshRecrutements, setRefreshRecrutements] = useState(false);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const fetchActus = async () => {
    const response = await axios.get("http://localhost:3030/api/actualites");
    setActus(response.data);
  };

  const fetchRecrutements = async () => {
    const response = await axios.get("http://localhost:3030/api/recrutement");
    setRecrutements(response.data);
  };

  useEffect(() => {
    fetchActus();
    fetchRecrutements();
    setLoading(false);
  }, [refreshActus, refreshRecrutements]);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3030/api/auth/login",
        {
          username: username,
          password: password,
        }
      );
      console.log(response.data);
      if (response.data) {
        login(response.data);
      }
    } catch (error) {
      setError("Identifiants incorrects. Veuillez réessayer.");
    }
  };

  return (
    <Box
      component="main"
      sx={{ p: 3, color: "primary.main", minHeight: "calc(100vh - 4rem)" }}
    >
      {!token && (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          <Typography variant="h2" gutterBottom>
            Connexion à l'espace administrateur
          </Typography>
          <form onSubmit={handleLogin}>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Toolbar></Toolbar>
            <TextField
              id="username"
              label="Nom d'utilisateur"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              id="password"
              label="Mot de passe"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" color="secondary">
              Se connecter
            </Button>
          </form>
        </Grid>
      )}
      {token && (
        <Box>
          <Toolbar></Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <Typography variant="h2">Espace administrateur</Typography>
            <Button onClick={logout}>Se déconnecter</Button>
          </Box>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            aria-label="admin tabs"
            onChange={handleChange}
          >
            <Tab label="Actualités" />
            <Tab label="Recrutement" />
          </Tabs>
          {value === 0 && (
            <ActusTabs
              actus={actus}
              onActuDeleted={() => setRefreshActus(true)}
            />
          )}
          {value === 1 && (
            <RecrutementTabs
              recrutements={recrutements}
              onRecrutementDeleted={() => setRefreshRecrutements(true)}
            />
          )}
        </Box>
      )}
    </Box>
  );
};

export default Admin;
