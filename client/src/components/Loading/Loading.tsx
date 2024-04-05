import { CircularProgress, Box } from "@mui/material";
import { LoadingProps } from "@/types/index";

function Loading({ open }: LoadingProps) {
  if (!open) {
    return null;
  }
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 9999,
      }}
    >
      <CircularProgress color="secondary" size="100px" />
    </Box>
  );
}

export default Loading;
