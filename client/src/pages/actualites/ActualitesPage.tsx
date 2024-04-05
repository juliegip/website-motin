import { Box, Typography } from "@mui/material";
import { ActusDisplay } from "@/components";

const Actualites = () => {
  return (
    <Box
      component="main"
      maxWidth={1200}
      mx="auto"
      mt="7rem"
      sx={{
        p: { xs: 4, lg: 0 },
        color: "primary.main",
        minHeight: "calc(100vh - 4rem)",
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        sx={{
          textAlign: "start",
          marginBottom: "1rem",
        }}
      >
        Actualites
      </Typography>
      <ActusDisplay />
    </Box>
  );
};

export default Actualites;
