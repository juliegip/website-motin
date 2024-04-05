import { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Slide,
  Paper,
  Typography,
  FormHelperText,
  IconButton,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { useRef } from "react";

function Chatbot() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");
  const [showChatbot, setShowChatbot] = useState(false);
  
  const paperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (paperRef.current && !paperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChatbot(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const trimmedPhoneNumber = phoneNumber.trim();
    const isValidPhoneNumber = /^[0-9]{10}$/.test(trimmedPhoneNumber);

    if (trimmedPhoneNumber === "") {
      setError("Le numéro de téléphone est requis");
    } else if (!isValidPhoneNumber) {
      setError("Veuillez entrer un numéro de téléphone valide");
    } else {
      try {
        await axios.post("http://localhost:3030/api/send", {
          from: "contact@motin.fr",
          to: "informatique.motin@gmail.com",
          subject: "Nouvelle demande de rappel",
          message: `Un client a demandé à être rappelé. Voici ses informations : \nNom : ${
            name || "Pas de nom communiqué"
          }\nTéléphone : ${trimmedPhoneNumber}`,
        });
      } catch (error) {
        console.error(error);
      }
      setError("");
      setIsOpen(false);
    }
  };

  return (
    <div>
      {showChatbot && (
        <>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<ChatIcon />}
            onClick={() => setIsOpen(true)}
            sx={{ position: "fixed", bottom: 76, right: 36 }}
          >
            Être recontacté ?
          </Button>
          <Slide direction="up" in={isOpen} mountOnEnter unmountOnExit>
              <Paper
                ref={paperRef}
                elevation={24}
                sx={{
                  position: "fixed",
                  bottom: 10,
                  right: 10,
                  width: 250,
                  height: "50vh",
                  padding: 2,
                  bgcolor: "background.paper",
                  overflow: "auto",
                  textAlign: "center",
                  zIndex: 1000,
                }}
              >
                <IconButton
                  onClick={() => setIsOpen(false)}
                  sx={{ float: "right" }}
                >
                  <CloseIcon />
                </IconButton>
                
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold", mt: 2 }}
                  color={"secondary"}
                >
                  Être recontacté
                </Typography>
                <Typography variant="body2" component="div" sx={{ my: 2 }}>
                  Entrez votre numéro de téléphone pour être recontacté par un
                  commercial. <br></br>
                  Nous vous rappelerons dans les plus brefs délais.
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="phoneNumber"
                    label="Numéro de téléphone"
                    type="text"
                    fullWidth
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    error={!!error}
                  />
                  <TextField
                    margin="dense"
                    id="name"
                    label="Nom"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                  />
                  {error && <FormHelperText error>{error}</FormHelperText>}
                  <Button
                    onClick={handleSubmit}
                    color="secondary"
                    sx={{ marginTop: 2, marginRight: 2 }}
                    variant="contained"
                  >
                    Envoyer
                  </Button>
                </form>
              </Paper>
          </Slide>
        </>
      )}
    </div>
  );
}

export default Chatbot;
