import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import NotFound from "../../assets/not_found.jpg";

const Page404 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid xs={6}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h6">
              La page que vous cherchez n'existe pas !
            </Typography>
            <Button variant="contained">Retour à l'accueil</Button>
          </Grid>
          <Grid xs={6}>
            <img src={NotFound} alt="" width={500} height={250} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Page404;
