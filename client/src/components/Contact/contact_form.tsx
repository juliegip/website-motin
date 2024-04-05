import {
  Box,
  TextField,
  Button,
  Alert,
  Grid,
  Typography,
  Select,
} from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useState } from "react";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import { ContactEmail } from "./contact_email";
import axios from "axios";
import STG_Drone from "../../assets/stg_drone.jpg";
import { ResponsiveButton } from "..";

type Props = {};

const ContactForm = (props: Props) => {
  const recaptchaRef = React.useRef<ReCAPTCHA>(null);
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.namedItem("name")?.value;
    const company = form.elements.namedItem("company")?.value;
    const phone = form.elements.namedItem("phone")?.value;
    const email = form.elements.namedItem("email")?.value;
    const town = form.elements.namedItem("town")?.value;
    const title = form.elements.namedItem("title")?.value;
    const message = form.elements.namedItem("message")?.value;

    console.log(name, company, email, town, title, message);

    const recaptchaValue = recaptchaRef.current?.getValue();
    if (recaptchaValue && name && phone && title && message) {
      try {
        await axios.post("http://localhost:3030/api/send", {
          from: "contact@motin.fr",
          to: "informatique.motin@gmail.com",
          subject: "Nouveau message de contact",
          message: render(
            <ContactEmail
              name={name}
              phone={phone}
              email={email}
              company={company}
              town={town}
              title={title}
              message={message}
            />
          ),
        });

        setEmailSent(true);
        setEmailError(false);
      } catch (error) {
        console.error(error);
      }
    } else {
      setEmailError(true);
      setEmailSent(false);
    }
  };

  return (
    <Grid
      container
      spacing={2}
      gap={1}
      justifyContent="space-between"
      style={{ height: "100%", padding: "1rem" }}
    >
      <Grid xs={12} sm={5} item>
        <Box
          sx={{
            backgroundImage: `url(${STG_Drone})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            aspectRatio: { xs: "1/1" },
            position: "relative",
            width: "100%",
          }}
        ></Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          width: "100%",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          marginBottom: { xs: "8rem", md: 0 },
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Contactez-nous!
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField label="Votre nom" name="name" fullWidth required />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Nom de la société" name="company" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Votre téléphone"
                name="phone"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Votre adresse email"
                name="email"
                type="email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Votre commune" name="town" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Select native fullWidth required name="title">
                <option value="" disabled>
                  Sélectionnez un titre
                </option>
                <option value="informations générales">
                  Informations générales
                </option>
                <option value="recrutement">Recrutement</option>
                <option value="rappel par un commercial">
                  Rappel par un commercial
                </option>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Votre message"
                name="message"
                multiline
                rows={4}
                fullWidth
                required
              />
            </Grid>
            <Grid
              item
              xs={12}
              display="flex"
              alignItems="center"
              sx={{
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_APP_TEST_SITE_KEY as string}
                ref={recaptchaRef}
              />
              <ResponsiveButton
                type="submit"
                variant="contained"
                color="secondary"
                sx={{
                  marginLeft: "auto",
                  height: "fit-content",
                  alignSelf: "center",
                  marginTop: { xs: "1rem", lg: 0 },
                }}
              >
                Envoyer
              </ResponsiveButton>
            </Grid>
            <Grid item xs={12}>
              {emailSent && !emailError && (
                <Alert severity="success">Le mail a bien été envoyé.</Alert>
              )}
              {emailError && (
                <Alert severity="error">
                  Une erreur s'est produite lors de l'envoi du mail.
                </Alert>
              )}
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
