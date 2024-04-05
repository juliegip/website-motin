import { Box, Toolbar, Typography } from "@mui/material";

const Occasions = () => {
  return (
    <Box
      component="main"
      sx={{ p: 3, color: "primary.main", minHeight: "calc(100vh - 4rem)" }}
    >
      <Toolbar></Toolbar>
      <Typography variant="h2" component="h2">
        Occasions
      </Typography>
    </Box>
  );
};

export default Occasions;
