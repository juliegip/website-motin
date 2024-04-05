import { Box, Button, Stack, Toolbar, Typography } from "@mui/material";

const TestTheme = () => {
  return (
    <Box component="main" sx={{ p: 3, minHeight: "calc(100vh - 6rem)" }}>
      <Toolbar></Toolbar>
      <Stack gap={2} sx={{ p: 2 }} alignItems="flex-start">
        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button color="secondary">Secondary</Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
        </Stack>
        <Typography variant="h1" gutterBottom>
          h1 heading Motin Votre concession Massey Fergusson en Normandie
        </Typography>
        <Typography variant="h2" gutterBottom>
          h2 heading Nous sommes à l'écoute et au service d'une agriculture
          intelligente
        </Typography>
        <Typography variant="h3" gutterBottom>
          h3. Notre Offre
        </Typography>
        <Typography variant="h4" gutterBottom>
          h4. Service après-vente
        </Typography>
        <Typography variant="h5" gutterBottom>
          h5. Entretien Maintenance
        </Typography>
        <Typography variant="h6" gutterBottom>
          h6. Heading
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          subtitle 1 Pas de panne chez Motin
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
          button text
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          caption text
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          overline text
        </Typography>
      </Stack>
    </Box>
  );
};

export default TestTheme;
